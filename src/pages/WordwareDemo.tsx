import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, RefreshCw, AlertCircle } from 'lucide-react';
import { generateProductDescription } from '../api/wordware';

export default function WordwareDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('Image must be less than 5MB');
        return;
      }
      setFile(selectedFile);
      setError('');
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleGenerate = async () => {
    if (!file) return;
    
    setLoading(true);
    setError('');
    setDescription('');
    
    try {
      const result = await generateProductDescription(file);
      setDescription(result);
    } catch (err) {
      console.error('Error in component:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate description');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <h1 className="text-3xl font-display font-bold gradient-text mb-6">
          Wordware.ai Demo
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
              <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-accent-pink/50 rounded-lg cursor-pointer hover:border-accent-pink transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                  name="imageUpload"
                  aria-label="Upload image"
                />
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 text-accent-pink mb-2" />
                    <span className="text-gray-300">Click to upload image</span>
                    <span className="text-gray-400 text-sm mt-2">Max size: 5MB</span>
                  </div>
                )}
              </label>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={!file || loading}
              className="pill-button w-full flex items-center justify-center space-x-2"
              type="button"
              aria-label="Generate description"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <span>Generate Description</span>
              )}
            </button>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Description</h2>
            {description ? (
              <p className="text-gray-300 whitespace-pre-wrap">{description}</p>
            ) : (
              <p className="text-gray-400 italic">
                {loading ? 'Generating description...' : 'Upload an image and click generate to see the AI-powered description'}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}