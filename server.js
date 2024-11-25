import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static('dist'));

app.post('/api/wordware-proxy', async (req, res) => {
  const { imageUrl } = req.body;
  const apiKey = process.env.VITE_WORDWARE_API_KEY;

  try {
    const response = await fetch(
      "https://app.wordware.ai/api/released-app/8f054c38-3d53-41c3-9e40-073ce88a3017/run",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: {
            "input image": {
              type: "image",
              image_url: imageUrl
            }
          },
          version: "^1.1"
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Wordware API error: ${response.status}`);
    }

    const data = await response.json();
    res.json({ description: data.outputs?.description || 'No description generated' });
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});