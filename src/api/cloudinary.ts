export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'wordware-demo');

  console.log('Starting Cloudinary upload...');
  
  try {
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dgfrkwl9p/image/upload',
      {
        method: 'POST',
        body: formData,
        mode: 'cors',  // Add this line
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Cloudinary Error:', {
        status: response.status,
        error: errorData
      });
      throw new Error(`Upload failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('Cloudinary response:', data);

    if (!data.secure_url) {
      throw new Error('No URL received from Cloudinary');
    }

    console.log('Image uploaded successfully:', data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Failed to upload image');
  }
};