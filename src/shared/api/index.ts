/**
 * API для взаимодействия с внешними сервисами
 */
import emailjs from '@emailjs/browser';
import type { QuizData } from '../types';

const EMAIL_SERVICE_ID = 'service_olhwuh5';
const EMAIL_TEMPLATE_ID = 'template_valentine';
const EMAIL_PUBLIC_KEY = 'fDp2AaQ5Alh6Os8w0';

/** Форматирование истории ответов для письма */
const formatAnswersHistory = (answers: QuizData['answers']): string => {
  return answers.map((answer, index) => `
    ${index + 1}. Вопрос: ${answer.question}
    Ответ: ${answer.answer}
    Баллы: ${answer.rating}
  `).join('\n');
};

/** Отправка результатов квиза на email */
export const sendQuizResults = async (data: QuizData): Promise<boolean> => {
  try {
    let photoBase64 = '';
    
    if (data.photo) {
      const reader = new FileReader();
      photoBase64 = await new Promise((resolve, reject) => {
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(data.photo);
      });
    }

    const answersHistory = formatAnswersHistory(data.answers);
    const aboutSection = data.about ? `\n\nО себе:\n${data.about}` : '';

    const templateParams = {
      to_email: 'stelsovich1@ya.ru',
      from_name: data.name,
      telegram: data.telegram,
      rating: data.rating,
      photo: photoBase64,
      message: `Новая анкета знакомств!\n\nИмя: ${data.name}\nTelegram: ${data.telegram}\nНабрано баллов: ${data.rating}${aboutSection}\n\nИстория ответов:\n${answersHistory}`,
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