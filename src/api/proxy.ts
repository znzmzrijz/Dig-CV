export async function proxyWordwareRequest(imageUrl: string): Promise<string> {
  try {
    const apiKey = "ww-I5nDWvUEq9ttKW7jN5HAJwUGRgE49DSnuIMHGrLUL5KH6dY3DnCfT2";
    
    const response = await fetch("https://app.wordware.ai/api/released-app/8f054c38-3d53-41c3-9e40-073ce88a3017/run", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
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
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${errorText}`);
    }

    const data = await response.json();
    return data.output || data.outputs?.description || data.description;
  } catch (error) {
    console.error('Proxy request failed:', error);
    throw error;
  }
}