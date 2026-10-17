import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { FilterOptions } from "@/components/shop/FilterOptions";
import { dummyShopProducts } from "@/constants/DummyProduct";

export default function ShopPage() {
  return (
    <FrontendLayout>
      <div className="my-10 flex flex-col gap-5 sm:flex-row">
        <FilterOptions />

        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-primary sm:text-2xl">
              Shop
            </h2>

            <select
              className="w-[130px] rounded-md border border-border bg-background px-2 py-1 text-xs"
              defaultValue="low-high"
              aria-label="Sort products"
            >
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product listing  */}

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {dummyShopProducts.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
          </div>

          
        </div>
      </div>
    </FrontendLayout>
  );
}
