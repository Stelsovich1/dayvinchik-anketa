import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_olhwuh5';
const EMAIL_TEMPLATE_ID = 'template_valentine';
const EMAIL_PUBLIC_KEY = 'fDp2AaQ5Alh6Os8w0';

interface QuizData {
  name: string;
  telegram: string;
  photo: File | null;
  rating: number;
}

export const sendQuizResults = async (data: QuizData): Promise<boolean> => {
  try {
    let photoBase64 = '';
    
    if (data.photo) {
      // Convert File to base64 (it's already compressed)
      const reader = new FileReader();
      photoBase64 = await new Promise((resolve, reject) => {
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(data.photo);
      });
    }

    const templateParams = {
      to_email: 'stelsovich1@ya.ru',
      from_name: data.name,
      telegram: data.telegram,
      rating: data.rating,
      photo: photoBase64,
      message: `Новая анкета знакомств!\n\nИмя: ${data.name}\nTelegram: ${data.telegram}\nНабрано баллов: ${data.rating}`,
      content: photoBase64 ? `<br><img src="${photoBase64}" style="max-width: 500px;" />` : ''
    };

    await emailjs.init(EMAIL_PUBLIC_KEY);
    
    const result = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    return result.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};