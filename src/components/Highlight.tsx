import React from 'react';

import { twMerge } from 'tailwind-merge';

export const Highlight = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <span className={twMerge('bg-neutral-200 px-1 py-0.5 text-neutral-900', className)}>{children}</span>;
};
