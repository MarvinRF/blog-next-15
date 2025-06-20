'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600'></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='relative inline-flex items-center h-6 rounded-full w-12 focus:outline-none'
      aria-label='Alternar tema'
      title='Alternar tema'
    >
      {/* Track (fundo do toggle) - Verde mais suave quando ativo */}
      <span
        className={`${
          theme === 'dark' ? 'bg-emerald-500' : 'bg-gray-300'
        } inline-block w-full h-full rounded-full transition-colors duration-500 ease-in-out`}
      ></span>

      {/* Thumb (botão deslizante) - Transição mais suave */}
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6 ' : 'translate-x-0 '
        } absolute left-0 inline-flex items-center justify-center w-6 h-6 rounded-full dark:bg-white bg-slate-800 shadow-sm transition duration-700 ease-in-out`}
      >
        {theme === 'dark' ? (
          <SunIcon className='w-3 h-3 text-slate-800 transition-colors duration-700' />
        ) : (
          <MoonIcon className='w-3 h-3 text-white transition-colors duration-700' />
        )}
      </span>
    </button>
  );
}
