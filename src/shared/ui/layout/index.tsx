import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Базовый компонент разметки приложения
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
