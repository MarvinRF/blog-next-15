import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type PostCoverImageProps = {
  href: string;
  src: string;
};

export const PostCoverImage = ({ href, src }: PostCoverImageProps) => {
  return (
    <Link href={href} className='w-full h-full overflow-hidden rounded-xl'>
      <Image
        className='w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-in-out'
        src={src}
        width={1200}
        height={720}
        alt='Title'
        priority
      />
    </Link>
  );
};
