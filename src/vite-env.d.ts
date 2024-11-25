/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDWARE_API_KEY: string
  readonly VITE_CLOUDINARY_API_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}