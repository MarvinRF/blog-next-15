import clsx from 'clsx';
import React from 'react';
import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkDownProps = {
  markdown: string;
};

const SafeMarkDown = ({ markdown }: SafeMarkDownProps) => {
  return (
    <div
      className={clsx(
        'prose prose-slate',
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-blue-500',
        'prose-a:hover:text-blue-700',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'lg:prose-lg',
      )}
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkDown>
      ;
    </div>
  );
};

export default SafeMarkDown;
