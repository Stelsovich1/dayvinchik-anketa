import { Toaster } from "react-hot-toast";
import { QuizProvider } from "./providers/quiz-provider";
import { Layout } from "../shared/ui/layout";
import { QuizFeature } from "../features/quiz";

/**
 * Корневой компонент приложения
 */
function App() {
  return (
    <QuizProvider>
      <Layout>
        <Toaster position="top-center" />
        <QuizFeature />
      </Layout>
    </QuizProvider>
  );
}

export default App;
