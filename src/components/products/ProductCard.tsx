
import Image from "next/image";
import Link from "next/link";

interface DummyProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: DummyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-4/5 overflow-hidden bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product details */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 transition-colors hover:text-gray-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-lg font-semibold text-gray-900">
          ${product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
};
