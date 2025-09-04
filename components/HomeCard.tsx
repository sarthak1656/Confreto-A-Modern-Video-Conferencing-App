'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { HomeCardProps } from '@/types';

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
  ariaLabel,
  disabled = false,
}: HomeCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (handleClick && !disabled) {
        handleClick();
      }
    }
  };

  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] transition-all duration-200',
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:scale-105 hover:shadow-lg',
        className,
      )}
      onClick={disabled ? undefined : handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel || `${title}: ${description}`}
      aria-disabled={disabled}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt={`${title} icon`}
          width={27}
          height={27}
          className="select-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-lg font-normal text-white/90">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
