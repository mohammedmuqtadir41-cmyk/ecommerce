import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm text-muted-foreground"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast
                      ? "font-medium text-foreground"
                      : ""
                  }
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <FiChevronRight
                  size={14}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
