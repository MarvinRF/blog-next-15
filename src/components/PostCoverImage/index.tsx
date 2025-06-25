import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type PostCoverImageProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  linkClassName?: string;
  imageClassName?: string;
  priority?: boolean;
};

export const PostCoverImage = ({
  href,
  alt,
  title,
  width,
  height,
  priority = false,
  linkClassName,
  imageClassName,
  src,
}: PostCoverImageProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl',
        linkClassName,
      )}
    >
      <Image
        className={clsx(
          'w-full h-full',
          'object-cover object-center',
          'group-hover:scale-105',
          'transition duration-500 ease-in-out',
          imageClassName,
        )}
        src={src}
        width={width}
        height={height}
        title={title}
        alt={alt}
        priority={priority}
      />
    </Link>
  );
};
