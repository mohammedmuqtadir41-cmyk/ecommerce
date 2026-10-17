
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border p-10 text-sm text-muted-foreground md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Fashion. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>

          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>

          <Link
            href="/cookies"
            className="transition-colors hover:text-foreground"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};
