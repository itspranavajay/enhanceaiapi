import React from 'react';
import Link from '@docusaurus/Link';

import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Text to Image',
    link: '/guides/text-to-image/intro-text-to-image', // You'll need to create or find an appropriate icon
    lightImage: '/static/landing-page/hero/text-to-image-graphic.png',
    darkImage: '/static/landing-page/hero/text-to-image-graphic-dark.png',
    text: 'Generate images from text descriptions using our AI platform. Perfect for creating art, designing products, and more.',
  },
  {
    title: 'Image to Image',
    link: '/guides/image-to-image/intro-image-to-image',
    // You'll need to create or find an appropriate icon
    lightImage: '/static/landing-page/hero/image-to-image-graphic.png',
    darkImage: '/static/landing-page/hero/image-to-image-graphic-dark.png',
    text: 'Transform images using our AI platform. Ideal for style transfer, object detection, and other image processing tasks.',
  },
  {
    title: 'Inpainting',
    link: '/guides/inpainting/intro-inpainting',
    // You'll need to create or find an appropriate icon
    lightImage: '/static/landing-page/hero/inpainting-graphic.png',
    darkImage: '/static/landing-page/hero/inpainting-graphic-dark.png',
    text: 'Fill in missing or corrupted parts of an image using our AI platform. Great for restoring old photos, removing unwanted objects, and more.',
  },
  {
    title: 'Upscale',
    link: '/guides/upscale/intro-upscale',
    // You'll need to create or find an appropriate icon
    lightImage: '/static/landing-page/hero/upscale-graphic.png',
    darkImage: '/static/landing-page/hero/upscale-graphic-dark.png',
    text: 'Increase the resolution of your images without losing quality using our AI platform. Perfect for enhancing photos, creating high-resolution prints, and more.',
  },
];

function HeroProduct({
  link,
  title,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with EnhanceAI
          </h2>
          <p className="max-w-xl text-center text-text-400">
            At EnhanceAI, we're building the future of image generation and processing.
            Integrate programmable, and easily customizable image generation and processing
            into your web, mobile, and desktop applications with just a few
            lines of code.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
