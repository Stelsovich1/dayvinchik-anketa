import imageCompression from "browser-image-compression";

/** Сжатие изображения перед загрузкой */
export const compressImage = async (file: File): Promise<File> => {
  const options = {
    maxSizeMB: 0.04,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
};
