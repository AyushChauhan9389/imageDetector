"use client"

import { useState } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SettingsIcon from '@/components/icons/SettingsIcon';

const DashboardPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [progress, setProgress] = useState({ objectDetection: 0, imageClassification: 0 });
  const [context, setContext] = useState('');
  const [detectedImage, setDetectedImage] = useState('/placeholder.svg');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      setDetectedImage(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setProgress({
        objectDetection: data.objectDetection,
        imageClassification: data.imageClassification,
      });
      setContext(data.context);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <SettingsIcon className="h-6 w-6" />
          </div>
          <div className="flex-1 overflow-auto">
            <div className="grid gap-4">
              <Button>Analyze New</Button>
              <Link className="flex items-center justify-between" href="#">
                My Checks
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
              <Link className="flex items-center justify-between" href="#">
                Community
                <ChevronRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="text-lg font-semibold">AI Image Detection</h1>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <form onSubmit={handleImageUpload} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="image">Upload Image</Label>
              <Input
                id="image"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="w-full">
              <Label>Detected Image</Label>
              <img
                alt="Detected Image"
                className="aspect-[4/3] w-full max-w-[600px] rounded-lg border border-gray-200 dark:border-gray-800 object-cover"
                height={450}
                src={detectedImage}
                width={600}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button type="submit">Analyze Image</Button>
              <Button type="button">Save</Button>
              <Button type="button">Reset</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Model Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Human Percentage</span>
                      <span className="text-sm font-medium">{progress.objectDetection}%</span>
                    </div>
                    <Progress value={progress.objectDetection} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Artifical Percentage</span>
                      <span className="text-sm font-medium">{progress.imageClassification}%</span>
                    </div>
                    <Progress value={progress.imageClassification} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Context</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {context}
                  </p>
                </CardContent>
              </Card>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

export default DashboardPage;
