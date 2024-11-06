/* interface CompressedImage {
  compressedFile: File;
  preview: string;
}

export const compressImage = async (file: File): Promise<CompressedImage> => {
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });

  const compressWithQuality = (img: HTMLImageElement, quality: number, maxDimension: number = 50): string => {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    // Scale down dimensions if needed
    if (width > height) {
      if (width > maxDimension) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      }
    } else {
      if (height > maxDimension) {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }

    // Use better image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Draw image with white background to handle transparency
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL('image/jpeg', quality);
  };

  // Convert base64 to File object
  const base64ToFile = (base64: string, filename: string): File => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  try {
    // Create initial image from file
    const reader = new FileReader();
    const imageData: string = await new Promise((resolve, reject) => {
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    
    const img = await createImage(imageData);
    
    // Start with these parameters
    let quality = 0.7;
    let maxDimension = 1200;
    let result = compressWithQuality(img, quality, maxDimension);
    
    // If still too large, try more aggressive compression
    while (result.length > 50 * 1024) {
      if (quality > 0.1) {
        // First try reducing quality
        quality -= 0.1;
      } else if (maxDimension > 400) {
        // Then try reducing dimensions
        quality = 0.7; // Reset quality
        maxDimension -= 200;
      } else {
        // Final attempt with minimum values
        quality = 0.1;
        maxDimension = 400;
        result = compressWithQuality(img, quality, maxDimension);
        break;
      }
      result = compressWithQuality(img, quality, maxDimension);
    }

    // Create compressed file and preview
    const compressedFile = base64ToFile(result, file.name);
    
    return {
      compressedFile,
      preview: result
    };
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
};*/

import imageCompression from 'browser-image-compression';
  export const compressImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 0.04, // Максимальный размер файла в мегабайтах
      maxWidthOrHeight: 1200, // Максимальная ширина или высота изображения
      useWebWorker: true, // Использовать веб-воркер для сжатия
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Error compressing image:', error);
      throw error;
    }
  };
