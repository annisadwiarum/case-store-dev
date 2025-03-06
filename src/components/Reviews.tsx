'use client';

import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useEffect, useRef, useState } from 'react';
import { inView, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const PHONES = [
  '/user-1.jpg',
  '/user-2.jpg',
  '/user-3.jpg',
  '/user-4.jpg',
  '/user-5.jpg',
  '/user-1.jpg',
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect;
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={(cn('animate-marquee space-y-8 py-4'), className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    ></div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const IsInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {IsInView ? <>{/* <ReviewColumn /> */}</> : null}
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        src="/what-people-are-buying.png"
        height={400}
        width={400}
        alt="what-people-are-buying"
        aria-hidden="true"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
    </MaxWidthWrapper>
  );
}
