// src/api/wordwareProxy.ts
export const proxyWordwareRequest = async (imageUrl: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_WORDWARE_API_KEY;
  
  try {
    // Use your backend proxy URL here
    const response = await fetch('/api/wordware-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        apiKey
      })
    });

    if (!response.ok) {
      throw new Error(`Proxy error: ${response.status}`);
    }

    const data = await response.json();
    return data.description;
  } catch (error) {
    console.error('Proxy request failed:', error);
    throw error;
  }
};