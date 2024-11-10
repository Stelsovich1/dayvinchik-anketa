import React, { useState } from "react";
import { Send } from "lucide-react";
import type { QuizData } from "../../../shared/types";

interface ContactScreenProps {
  onSubmit: (data: QuizData) => Promise<void>;
  initialData?: Partial<QuizData>;
}

/**
 * Экран контактной формы
 */
export const ContactScreen: React.FC<ContactScreenProps> = ({
  onSubmit,
  initialData = {},
}) => {
  const [formData, setFormData] = useState<QuizData>({
    name: initialData.name || "",
    telegram: initialData.telegram || "",
    about: initialData.about || "",
    photo: initialData.photo || null,
    rating: initialData.rating || 0,
    answers: initialData.answers || [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const compressedFile = await compressImage(file);
        setPhoto(compressedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreview(reader.result as string);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };*/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit({ ...formData /* photo */ });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Спасибо! А теперь давай познакомимся поближе
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Как тебя зовут?
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Твой Telegram
          </label>
          <input
            type="text"
            required
            value={formData.telegram}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, telegram: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Немного о себе
          </label>
          <textarea
            value={formData.about}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, about: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[100px] resize-y"
            disabled={isSubmitting}
            placeholder="Например о своих интересах, увлечениях..."
          />
        </div>

        {/*        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ваше фото
          </label>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            disabled={isSubmitting}
          />
          <div 
            onClick={() => !isSubmitting && fileInputRef.current?.click()}
            className={`w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-pink-500 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Нажмите чтобы загрузить фото</span>
              </>
            )}
          </div>
        </div>*/}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg flex items-center justify-center gap-2 transition-all ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-pink-600 hover:to-red-600"
          }`}
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
