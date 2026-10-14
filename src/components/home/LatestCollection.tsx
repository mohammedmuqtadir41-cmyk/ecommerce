"use client";

import { dummyLatestCollections } from "@/constants/DummyProduct";
import { SectionHeader } from "../ui/SectionHeader";
import { ProductCard } from "../products/ProductCard";

export const LatestCollection = () => {
  return (
    <section className="my-10">
      <SectionHeader
        title="Latest Collection"
        subTitle="New arrivals added Weekly"
      />
      <div className="my-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {dummyLatestCollections.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
      ;
    </section>
  );
};
