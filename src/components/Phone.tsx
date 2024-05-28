import { cn } from '@/lib/utils';
import { Divide } from 'lucide-react';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className,
      )}
      {...props}
    >
      <Image
        src={dark ? '/ip-template-dark.png' : '/ip-template-white.png'}
        height={400}
        width={400}
        alt="phone-image"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          height={500}
          width={500}
          alt="image-src"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Phone;
