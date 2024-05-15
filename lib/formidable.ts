import { IncomingForm } from 'formidable';
import type { NextApiRequest } from 'next';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
const uploadDir = path.join(process.cwd(), '/public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const form = new IncomingForm({
  uploadDir,
  keepExtensions: true,
});

export const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields, files: formidable.Files }> => {
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};
