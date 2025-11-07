import React from "react";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      name: "Teak Wood Temple",
      description: "Beautiful handcrafted temple made from pure teak wood.",
      category: "Temple",
      image:
        "https://images.unsplash.com/photo-1616627454312-4b1c2f73f481?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Oakwood King Size Bed",
      description: "Elegant and durable king-size bed with oakwood finish.",
      category: "Bed",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Classic Wooden Chair",
      description: "Comfortable handcrafted chair perfect for your living room.",
      category: "Chair",
      image:
        "https://images.unsplash.com/photo-1604328698692-21061aeb31c2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Modern Dining Table",
      description: "Solid wood dining table with a sleek contemporary design.",
      category: "Table",
      image:
        "https://images.unsplash.com/photo-1598300056393-4e8e36f0e2c2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-[#fffaf5] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <Link
            to="/furniture/list"
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-sm text-amber-600 font-medium mb-4">
                  {product.category}
                </p>
                <Link
                  to={`/furniture/${product.id}`}
                  className="inline-block border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium text-sm px-4 py-2 rounded-md transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
