import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';
import fs from 'fs';
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function POST(req: NextRequest) {
  try {
    await fs.promises.mkdir(uploadDir, { recursive: true });

    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    // Create a form data to send the image to the external API
    const uploadFormData = new FormData();
    uploadFormData.append('image', new Blob([buffer]), filename);

    // Post the image to the external API
    const apiResponse = await fetch('http://127.0.0.1:5000/api', {
      method: 'POST',
      body: uploadFormData,
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to get response from the external API');
    }

    const responseJson = await apiResponse.json();

    // Set the values from the API response
    const objectDetection = responseJson.human * 100;
    const imageClassification = responseJson.artificial * 100;
    const context = responseJson.context;

    return NextResponse.json(
      {
        objectDetection,
        imageClassification,
        context,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
