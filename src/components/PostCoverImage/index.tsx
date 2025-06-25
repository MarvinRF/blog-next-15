import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type Mode = 'fixed' | 'responsive';

type PostCoverImageProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  linkClassName?: string;
  imageClassName?: string;
  mode?: Mode;

  // Apenas para o modo "fixed"
  width?: number;
  height?: number;

  // Apenas para o modo "responsive"
  responsiveHeightClass?: string; // Ex: h-[300px]
};

export const PostCoverImage = ({
  href,
  src,
  alt,
  title,
  priority = false,
  linkClassName,
  imageClassName,
  mode = 'responsive',
  width,
  height,
  responsiveHeightClass = 'h-[240px] sm:h-[260px] md:h-[280px]',
}: PostCoverImageProps) => {
  return (
    <Link
      href={href}
      className={clsx('w-full overflow-hidden rounded-xl', linkClassName)}
    >
      {mode === 'responsive' ? (
        <div className={clsx('relative w-full', responsiveHeightClass)}>
          <Image
            src={src}
            alt={alt}
            title={title}
            fill
            priority={priority}
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className={clsx(
              'object-cover object-center transition duration-500 ease-in-out group-hover:scale-105',
              imageClassName,
            )}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          priority={priority}
          className={clsx(
            'w-full h-full object-cover object-center transition duration-500 ease-in-out group-hover:scale-105',
            imageClassName,
          )}
        />
      )}
    </Link>
  );
};
