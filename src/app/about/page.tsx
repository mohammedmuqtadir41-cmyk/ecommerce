import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <FrontendLayout>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Redefining Everyday Style with Timeless Elegance
            </h1>

            <p className="mt-6 leading-8 text-muted-foreground">
              At Fashion, we believe clothing is more than just what you wear.
              It is an expression of your personality, confidence, and
              individuality. Our collections bring together timeless designs,
              contemporary trends, and everyday comfort to help you create a
              style that feels uniquely yours.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              From versatile everyday essentials to sophisticated statement
              pieces, every collection is thoughtfully curated with an emphasis
              on quality, comfort, and attention to detail. Our goal is to make
              discovering your personal style effortless and enjoyable.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              We are committed to delivering a seamless shopping experience
              built around carefully selected styles, reliable service, and
              customer satisfaction. At Fashion, we help you look confident,
              feel comfortable, and express yourself with every outfit.
            </p>

            {/* Brand Statistics */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  20k+
                </h2>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  500+
                </h2>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Curated Products
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/about.png"
                alt="Discover the Fashion collection"
                width={700}
                height={800}
                priority
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:-left-5 sm:px-7">
              <p className="text-sm font-semibold text-foreground">
                Style That Speaks
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Confidence in every detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
