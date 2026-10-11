import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-0">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[calc(100svh-64px)] lg:grid-cols-2 lg:gap-14 xl:gap-20">
        {/* Hero content */}
        <div className="order-2 mx-auto w-full max-w-xl text-center lg:order-1 lg:mx-0 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground sm:text-sm">
            <span aria-hidden="true">✦</span>
            NEW COLLECTION 2026
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:mt-8 lg:text-6xl xl:text-7xl">
            Elevate Your Style With{" "}
            <span className="font-normal italic">Premium Fashion</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
            Discover timeless essentials and the latest trends for men and
            women. Thoughtfully selected styles, premium details, and effortless
            everyday elegance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-black px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              <span className="!text-white">Shop Now</span>
              <span aria-hidden="true" className="!text-white">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Discover Our Story
            </Link>
          </div>

          <p className="mt-6 text-xs tracking-wide text-muted-foreground sm:text-sm">
            TIMELESS DESIGN · EVERYDAY COMFORT
          </p>
        </div>

        {/* Hero image */}
        <div className="order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-2xl bg-surface sm:-inset-3"
            />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-xl bg-surface sm:aspect-[4/4.2] lg:aspect-[4/5]">
              <Image
                src="/images/hero.png"
                alt="Featured looks from our premium fashion collection"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 80vw, 50vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />

              {/* Floating price card */}
              <div className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded-lg border border-white/50 bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5 sm:p-4">
                <p className="text-xs font-medium text-gray-600">
                  Starting from
                </p>

                <p className="mt-1 text-xl font-semibold tracking-tight text-gray-950 sm:text-2xl">
                  $9.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
