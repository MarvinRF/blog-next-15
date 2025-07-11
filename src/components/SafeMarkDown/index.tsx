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
        'prose prose-zinc dark:prose-invert',
        'w-full max-w-none',
        'overflow-hidden',
        'prose-a:transition',
        'prose-a:no-underline',
        'prose-a:text-emerald-400',
        'prose-a:hover:text-emerald-600',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'lg:prose-lg',
        'dark:text-white',
      )}
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[600px]' {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkDown>
      ;
    </div>
  );
};

export default SafeMarkDown;
