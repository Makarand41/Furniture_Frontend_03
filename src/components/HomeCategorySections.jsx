// import React from "react";
// import { Link } from "react-router-dom";

// const HomeCategorySections = () => {
//   const categories = [
//     {
//       title: "Beds",
//       slug: "bed",
//       products: [
//         {
//           id: 1,
//           name: "Oakwood King Bed",
//           desc: "Luxury king size bed made with oak wood finish.",
//           image:
//             "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 2,
//           name: "Classic Double Bed",
//           desc: "Elegant double bed perfect for modern bedrooms.",
//           image:
//             "https://images.unsplash.com/photo-1628744876667-c207cb14a2df?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 3,
//           name: "Minimalist Wooden Bed",
//           desc: "Sleek, minimal bed design crafted from teak.",
//           image:
//             "https://images.unsplash.com/photo-1600607687920-4e2a07c5c8f6?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 4,
//           name: "Storage Bed",
//           desc: "Modern bed with built-in storage space.",
//           image:
//             "https://images.unsplash.com/photo-1616627454312-4b1c2f73f481?auto=format&fit=crop&w=800&q=80",
//         },
//       ],
//     },
//     {
//       title: "Cupboards",
//       slug: "cupboard",
//       products: [
//         {
//           id: 1,
//           name: "Teakwood Cupboard",
//           desc: "Spacious cupboard made from pure teak wood.",
//           image:
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 2,
//           name: "Sliding Door Wardrobe",
//           desc: "Elegant sliding door cupboard for modern homes.",
//           image:
//             "https://images.unsplash.com/photo-1600607687920-4e2a07c5c8f6?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 3,
//           name: "Vintage Storage Cupboard",
//           desc: "Antique finish wooden cupboard for storage.",
//           image:
//             "https://images.unsplash.com/photo-1588854337115-1c3e1e6e1b9a?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 4,
//           name: "Modern Wardrobe",
//           desc: "Contemporary cupboard with glass panels.",
//           image:
//             "https://images.unsplash.com/photo-1600585153936-32f23d4a20d8?auto=format&fit=crop&w=800&q=80",
//         },
//       ],
//     },
//     {
//       title: "Chairs",
//       slug: "chair",
//       products: [
//         {
//           id: 1,
//           name: "Rocking Chair",
//           desc: "Comfortable handcrafted wooden rocking chair.",
//           image:
//             "https://images.unsplash.com/photo-1578898887882-067e5ae21191?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 2,
//           name: "Office Chair",
//           desc: "Ergonomic wooden chair perfect for workstations.",
//           image:
//             "https://images.unsplash.com/photo-1582582494700-cc9a16c9a8b5?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 3,
//           name: "Dining Chair",
//           desc: "Classic wooden chair ideal for dining tables.",
//           image:
//             "https://images.unsplash.com/photo-1616627454016-bb0cc07d1e1c?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 4,
//           name: "Lounge Chair",
//           desc: "Stylish wooden lounge chair with soft cushioning.",
//           image:
//             "https://images.unsplash.com/photo-1600585153936-32f23d4a20d8?auto=format&fit=crop&w=800&q=80",
//         },
//       ],
//     },
//     {
//       title: "Sofas",
//       slug: "sofa",
//       products: [
//         {
//           id: 1,
//           name: "Teak Sofa Set",
//           desc: "Premium 3-seater sofa made from teak wood.",
//           image:
//             "https://images.unsplash.com/photo-1600585154207-6ad0b8573b51?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 2,
//           name: "Corner Sofa",
//           desc: "Modern L-shaped corner sofa for your living room.",
//           image:
//             "https://images.unsplash.com/photo-1598300042247-44d5b6f2c5a7?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 3,
//           name: "Wooden Frame Sofa",
//           desc: "Elegant wooden sofa with soft cushions.",
//           image:
//             "https://images.unsplash.com/photo-1600607687693-4be16d1b3c5d?auto=format&fit=crop&w=800&q=80",
//         },
//         {
//           id: 4,
//           name: "Minimalist Sofa Set",
//           desc: "Clean lines and cozy comfort for modern homes.",
//           image:
//             "https://images.unsplash.com/photo-1600585154254-98b8d243bb84?auto=format&fit=crop&w=800&q=80",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#fffaf5] py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Main Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 tracking-tight">
//           Our <span className="text-amber-600">Products</span>
//         </h2>

//         {/* Category Sections */}
//         <div className="space-y-20">
//           {categories.map((cat) => (
//             <div key={cat.slug}>
//               {/* Section Header */}
//               <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
//                 <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
//                   {cat.title}
//                 </h3>
//                 <Link
//                   to={`/furniture/list?category=${cat.slug}`}
//                   className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
//                 >
//                   View All
//                 </Link>
//               </div>

//               {/* Product Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
//                 {cat.products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full max-w-xs"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-56 object-cover"
//                     />
//                     <div className="p-5 text-center">
//                       <h4 className="text-lg font-semibold text-gray-800 mb-1">
//                         {product.name}
//                       </h4>
//                       <p className="text-gray-500 text-sm mb-3 line-clamp-2">
//                         {product.desc}
//                       </p>
//                       <Link
//                         to={`/furniture/${product.id}`}
//                         className="inline-block border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium text-sm px-4 py-2 rounded-md transition"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeCategorySections;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const HomeCategorySections = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Step 1: Fetch all categories (changed to singular)
        const catRes = await api.get("/api/category/all");
        const cats = catRes.data || [];
        setCategories(cats);

        // ✅ Step 2: For each category, fetch up to 4 products
        const productFetches = cats.map(async (cat) => {
          const prodRes = await api.get(`/api/furniture/byCategory/${cat.id}`);
          const products = prodRes.data?.slice(0, 4) || []; // Limit 4
          return { [cat.name]: products };
        });

        const allProducts = await Promise.all(productFetches);
        const mergedProducts = Object.assign({}, ...allProducts);

        setProductsByCategory(mergedProducts);
      } catch (err) {
        console.error("Error loading categories or products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <section className="bg-[#fffaf5] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🪑 Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 tracking-tight">
          Our <span className="text-amber-600">Products</span>
        </h2>

        {/* 🏷️ Dynamic Category Sections */}
        <div className="space-y-20">
          {categories.length === 0 ? (
            <p className="text-gray-500 text-lg">No categories found.</p>
          ) : (
            categories.map((cat) => {
              const products = productsByCategory[cat.name] || [];
              if (products.length === 0) return null;

              return (
                <div key={cat.id}>
                  {/* Category Header */}
                  <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 capitalize">
                      {cat.name}
                    </h3>
                    <Link
                      to={`/furniture/list?category=${cat.id}`}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
                    >
                      View All
                    </Link>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden w-full max-w-xs"
                      >
                        <img
                          src={`http://localhost:8081/${product.image?.replace(
                            /^\/+/,
                            ""
                          )}`}
                          alt={product.name}
                          className="w-full h-56 object-cover"
                        />
                        <div className="p-5 text-center">
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">
                            {product.name}
                          </h4>
                          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                            {product.description || "No description available."}
                          </p>
                          <Link
                            to={`/furniture/view/${product.id}`}
                            className="inline-block border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-medium text-sm px-4 py-2 rounded-md transition"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCategorySections;
