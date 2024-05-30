import { Icons } from '@/components/Icons';
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
                  src="/case-1.png"
                  height={700}
                  width={700}
                  alt=""
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                {' '}
                Lorem ipsum{' '}
                <span className="bg-yellow-500 px-2 text-white">dolor</span> sit
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
                    <Check className="w-5 h-5 shrink-0 text-yellow-500" />
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-yellow-500" />
                    Lorem, ipsum dolor.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="w-5 h-5 shrink-0 text-yellow-500" />
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
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
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

      {/* proposion section */}
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 text-center tracking-tight text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl">
              Lorem ipsum{' '}
              <span className="relative px-2">
                dolor sit{' '}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-yellow-500" />
              </span>{' '}
              amet.
            </h2>
            <Image
              src="/case-1.png"
              height={700}
              width={700}
              alt=""
              className="w-24 order-0 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, a nobis dolores illum, alias deleniti quis porro {''}
                  <span className="bg-slate-800 text-white p-0.5">
                    dolore deserunt voluptates dicta quod{' '}
                  </span>
                  aliquam nisi amet id quia animi quasi? Alias blanditiis
                  ducimus voluptate suscipit facere?
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src="/user/user-1.jpg"
                  height={20}
                  width={20}
                  alt="user image"
                  className="h-12 w-12 rounded-full object-cover "
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Mizeath</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-yellow-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
