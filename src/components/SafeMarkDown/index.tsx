import React from 'react';
import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkDownProps = {
  markdown: string;
};

const SafeMarkDown = ({ markdown }: SafeMarkDownProps) => {
  return (
    <div>
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
