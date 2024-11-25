import { uploadToCloudinary } from './cloudinary';
import { proxyWordwareRequest } from './proxy';

export const generateProductDescription = async (imageFile: File): Promise<string> => {
  if (!imageFile) {
    throw new Error('No image file provided');
  }

  try {
    // Upload to Cloudinary first
    console.log('Starting Cloudinary upload with file:', imageFile.name);
    const imageUrl = await uploadToCloudinary(imageFile);
    console.log('Image uploaded successfully:', imageUrl);

    // Make request through our proxy
    console.log('Making Wordware API request...');
    const description = await proxyWordwareRequest(imageUrl);
    
    if (!description) {
      throw new Error('No description generated');
    }

    return description;

  } catch (error) {
    console.error('Complete error details:', {
      message: error.message,
      stack: error.stack,
      error
    });
    throw error instanceof Error 
      ? error 
      : new Error('Failed to generate description');
  }
};