import Image from 'next/image';
import React from 'react';

import { Heading } from './Heading';
import { twMerge } from 'tailwind-merge';

export const TechStack = () => {
  const stack = [
    {
      title: 'Next.js',
      src: '/images/logos/next.png',

      className: 'h-10 w-14',
    },
    {
      title: 'Node',
      src: '/images/logos/node.png',

      className: 'h-10 w-12',
    },
    {
      title: 'Tailwind',
      src: '/images/logos/tailwind.png',

      className: 'h-10 w-24',
    },
    {
      title: 'Vercel',
      src: '/images/logos/vercel.png',

      className: 'h-10 w-24',
    },
  ];

  return (
    <div className="mt-">
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mb-4">
        Tech Stack
      </Heading>
      <div className="flex flex-wrap bg-white p-4 justify-between gap-1 rounded">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge('object-contain', item.className)}
          />
        ))}
      </div>
    </div>
  );
};
