'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from '../lib/context/ThemeContext';
import { AuthProvider } from '../lib/context/AuthContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prajwal Fating - Full Stack Developer & Data Science Enthusiast</title>
        <meta name="description" content="Prajwal Fating - Full Stack Developer, AI/ML Enthusiast, IoT Solutions Expert" />
      </head>
      <body className="dark">
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
