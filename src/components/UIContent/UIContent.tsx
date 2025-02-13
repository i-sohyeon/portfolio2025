import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  title: string;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Content: React.FC<ContentProps> = ({ title, children, theme = 'light' }) => {
  const themeStyles = {
    light: 'bg-white text-gray-800',
    dark: 'bg-gray-800 text-white'
  };

  // 테마 타입 정의
type ThemeType = 'primary' | 'secondary' | 'accent';

const getThemeClass = (theme: ThemeType): string => {
  const themes = {
    primary: 'bg-blue-100 border-blue-300',
    secondary: 'bg-gray-100 border-gray-300',
    accent: 'bg-green-100 border-green-300'
  };
  return themes[theme];
};

  return (
    <section className={`p-6 rounded-lg shadow-md ${themeStyles[theme]}`}>
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </header>
      <div className="content-body space-y-3">
        {children}
      </div>
    </section>
  );
};

// 사용 예시
const App: React.FC = () => {
  const posts = [
    { id: 1, title: "TypeScript 기초", content: "타입 시스템 이해하기" },
    { id: 2, title: "React Hooks", content: "useState 활용법" }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {posts.map(post => (
        <Content key={post.id} title={post.title} theme="light">
          <p className="text-gray-600">{post.content}</p>
        </Content>
      ))}
    </div>
  );
};