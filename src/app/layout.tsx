import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';

import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Marvin Tech Blog',
    template: '%s - Marvin Tech Blog',
  },
  description: 'A blog about tech and programming',
  keywords: 'tech, programming, blog',
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
          <Container>
            <Header />
            {children}
            <footer>
              <p className='text-5xl font-bold text-center py-8'>Footer</p>
            </footer>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
