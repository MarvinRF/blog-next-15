import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Marvin Tech Blog',
  description: 'Go Beyond ',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
