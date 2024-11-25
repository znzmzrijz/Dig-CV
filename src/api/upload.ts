import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../lib/firebase';

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `product-images/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error('Failed to upload image');
  }
};