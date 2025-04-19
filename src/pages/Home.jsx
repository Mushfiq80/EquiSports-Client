import React from "react";
import { categories, products } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingBag, Award, TrendingUp } from "lucide-react";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="w-full">
        <Slider {...sliderSettings}>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000"
              alt="Sports Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Premium Sports Equipment
                </h1>
                <p className="text-xl mb-6">Get the best gear for your game</p>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000"
              alt="Sports Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Professional Quality
                </h1>
                <p className="text-xl mb-6">
                  Equipment trusted by athletes worldwide
                </p>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000"
              alt="Sports Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Special Offers</h1>
                <p className="text-xl mb-6">Up to 40% off on selected items</p>
                <button className="btn btn-primary">View Deals</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <ShoppingBag className="w-12 h-12 text-primary" />
                <h2 className="card-title">Quality Products</h2>
                <p>Premium sports equipment from trusted brands</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Award className="w-12 h-12 text-primary" />
                <h2 className="card-title">Expert Support</h2>
                <p>Professional guidance for your equipment needs</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <TrendingUp className="w-12 h-12 text-primary" />
                <h2 className="card-title">Best Prices</h2>
                <p>Competitive prices and regular deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="text-lg font-semibold">${product.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sports Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{category.name}</h3>
                  <button className="btn btn-primary btn-sm">Browse</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-content rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter for the latest products and exclusive
              offers!
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
