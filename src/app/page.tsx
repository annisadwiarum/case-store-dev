import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto items-center lg:items-start text-center lg:text-left flex flex-col">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/case-1.jpg"
                  height={700}
                  width={700}
                  alt=""
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                {' '}
                Lorem ipsum{' '}
                <span className="bg-violet-400 px-2 text-white">dolor</span> sit
                amet.{' '}
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{' '}
                <span className="font-semibold">
                  Ullam aut veritatis laborum
                </span>{' '}
                voluptates maiores dolore debitis obcaecati perspiciatis
                temporibus odit.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center lg:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-violet-400" />
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-violet-400" />
                    Lorem, ipsum dolor.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-violet-400" />
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </div>
              </ul>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-12">
                <div className="flex -space-x-4">
                  <Image
                    src="/user/user-4.jpg"
                    height={20}
                    width={20}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src="/user/user-5.jpg"
                    height={20}
                    width={20}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src="/user/user-2.jpg"
                    height={20}
                    width={20}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src="/user/user-3.jpg"
                    height={20}
                    width={20}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src="/user/user-1.jpg"
                    height={20}
                    width={20}
                    alt="user image"
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-1.5">
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                  </div>

                  <p>
                    <span className="font-semibold">1.350</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center col-span-full lg:col-span-1 w-full px-8 sm:px-16 md:px-0 mt-32 lg:mt-20 lg:mx-0 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                height={400}
                width={400}
                alt="your-image"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden lg:hidden sm:block xl:block"
              />
              <Image
                src="/line.png"
                height={400}
                width={400}
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone imgSrc="/user/user-5.jpg" className="w-64" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
