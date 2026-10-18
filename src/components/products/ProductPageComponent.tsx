"use client";

import { useState } from "react";
import Image from "next/image";
import BreadCrumb from "../ui/BreadCrumbs";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

const sizes = ["S", "M", "L", "XL"];

const colors = [
  { name: "Charcoal", value: "#1F2937" },
  { name: "Brown", value: "#8B5E3C" },
  { name: "Light Gray", value: "#E5E7EB" },
];

export default function ProductPageComponent() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    window.setTimeout(() => setAddedToCart(false), 2500);

    // Connect your actual cart functionality here.
  };

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Classic Everyday T-Shirt" },
          ]}
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Product Gallery */}
          <section aria-label="Product images" className="min-w-0">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
              <Image
                src={selectedImage}
                alt="Classic Everyday T-Shirt"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                Everyday Essentials
              </span>
            </div>

            {/* Image Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={selectedImage === image}
                  className={`relative aspect-[4/5] overflow-hidden rounded-xl border-2 transition-colors ${
                    selectedImage === image
                      ? "border-primary"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product view ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 22vw, 12vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Product Highlights */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border py-5">
              {[
                ["Easy Care", "Everyday wear"],
                ["Versatile", "Style your way"],
                ["Comfort First", "Made for daily use"],
              ].map(([title, description]) => (
                <div key={title} className="px-2 text-center">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Product Details */}
          <section className="lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              The Essential Collection
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Classic Everyday T-Shirt
            </h1>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Effortless style. Everyday comfort.
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <p className="text-2xl font-semibold tracking-tight">
                ₹999
              </p>
              <span className="text-sm text-muted-foreground">
                Inclusive of taxes
              </span>
            </div>

            <div className="my-7 border-t border-border" />

            <p className="text-sm leading-7 text-muted-foreground">
              A timeless wardrobe essential designed to fit effortlessly
              into your everyday style. Pair it with your favorite denim,
              layer it for cooler days, or keep it simple for a clean,
              understated look.
            </p>

            {/* Colors */}
            <div className="mt-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  Color: {selectedColor.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {colors.length} options
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name}`}
                    aria-pressed={selectedColor.name === color.name}
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "border-border hover:scale-105"
                    }`}
                  >
                    <span
                      className="h-7 w-7 rounded-full border border-black/10"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  Select Size: {selectedSize}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      "Please add your actual size chart before using this feature."
                    )
                  }
                  className="text-xs font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Size guide
                </button>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`h-12 rounded-lg border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold">Quantity</p>

              <div className="inline-flex h-12 items-center rounded-lg border border-border">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                  className="h-full w-12 rounded-l-lg text-lg transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>

                <span
                  aria-live="polite"
                  className="min-w-10 text-center text-sm font-medium"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.min(10, current + 1))
                  }
                  disabled={quantity === 10}
                  aria-label="Increase quantity"
                  className="h-full w-12 rounded-r-lg text-lg transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {addedToCart ? "Added Successfully ✓" : "Add to Cart"}
              </button>

              <p className="text-center text-xs leading-5 text-muted-foreground">
                Selected: {selectedColor.name} · Size {selectedSize} · Qty{" "}
                {quantity}
              </p>
            </div>

            {/* Delivery Information */}
            <div className="mt-8 space-y-4 border-t border-border pt-6">
              <div className="flex gap-3">
                <span aria-hidden="true" className="text-lg text-primary">
                  ↗
                </span>
                <div>
                  <p className="text-sm font-medium">
                    Delivery information
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Delivery estimates will be available at checkout.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span aria-hidden="true" className="text-lg text-primary">
                  ↺
                </span>
                <div>
                  <p className="text-sm font-medium">
                    Returns and exchanges
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Please review our return policy before purchasing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
