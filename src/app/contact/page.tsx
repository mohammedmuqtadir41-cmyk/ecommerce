import Link from "next/link";
import Image from "next/image";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";

const contactDetails = [
  {
    number: "01",
    title: "Customer Support",
    description: "Questions about orders, payments, or delivery?",
    value: "support@fashion.com",
    href: "mailto:support@fashion.com",
  },
  {
    number: "02",
    title: "Call Our Team",
    description: "We’re happy to help you find the right solution.",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
];

export default function ContactPage() {
  return (
    <FrontendLayout>
      <main className="overflow-x-clip">
        {/* Intro */}
        <section className="px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              We’re here for you
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-end">
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Good style starts with a{" "}
                <span className="text-primary">conversation.</span>
              </h1>

              <p className="max-w-lg leading-7 text-muted-foreground md:justify-self-end">
                Need help with an order, styling advice, or finding your
                perfect fit? Tell us what you need. We’re here to make
                shopping with Fashion feel effortless.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Store Image */}
            <div className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-muted sm:min-h-[440px] lg:min-h-[600px]">
              <Image
                src="/images/contact.png"
                alt="Explore the Fashion boutique"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/75">
                  The Fashion experience
                </p>

                <h2 className="mt-3 max-w-md text-2xl font-medium leading-snug sm:text-3xl">
                  Your style. Your story. We’re listening.
                </h2>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-6 sm:p-9 lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Get in touch
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  How can we help?
                </h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Whether it’s a quick question or a little extra guidance,
                  our team is just a message or call away.
                </p>
              </div>

              <div className="mt-8 divide-y divide-border">
                {contactDetails.map((item) => (
                  <div key={item.number} className="py-6 first:pt-0 last:pb-6">
                    <div className="flex gap-4">
                      <span className="pt-1 text-xs font-medium tracking-wider text-primary">
                        {item.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>

                        <a
                          href={item.href}
                          className="mt-3 inline-flex break-all text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="rounded-xl bg-muted/60 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Customer care hours
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>

                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                </div>
              </div>

              {/* Email CTA */}
              <Link
                href="mailto:support@fashion.com"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Contact our team
                <span aria-hidden="true">↗</span>
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                We look forward to hearing from you.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Brand Statement */}
        <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl border-t border-border pt-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p className="text-lg font-medium tracking-tight text-foreground">
              Made for your everyday. Styled by you.
            </p>

            <p className="mt-2 text-sm text-muted-foreground sm:mt-0">
              Thank you for making Fashion part of your story.
            </p>
          </div>
        </section>
      </main>
    </FrontendLayout>
  );
}
