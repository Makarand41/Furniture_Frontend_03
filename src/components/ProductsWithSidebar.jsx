// import api from "../api";
// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import CategorySidebar from "./CategorySidebar";
// import styles from "./ProductsWithSidebar.module.css";
// const buildImageUrl = (path) => {
//   if (!path) return null;
//   const cleaned = path.replace(/^\/+/, "");
//    return `http://localhost:8081/${cleaned}`;
//   //return `https://furniture-backend-docker-production.up.railway.app/${cleaned}`;

// };

// export default function ProductsWithSidebar() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state
//   const navigate = useNavigate(); // Add navigation hook

//   useEffect(() => {
//     let mounted = true;
//     const fetchData = async () => {
//       //const res = await axios.get("http://localhost:8080/api/furniture/all", 
//      try {
//   const res = await api.get("/api/furniture/all", {
//     timeout: 6000,
//   });
//   if (mounted) {
//     setItems(Array.isArray(res.data) ? res.data : []);
//   }
//       } catch (err) {
//         console.error("Failed to load products", err);
//         if (mounted) setItems([]);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };
//     fetchData();
//     return () => (mounted = false);
//   }, []);

//   const filtered = useMemo(() => {
//     if (!selectedCategories?.length) return items;
//     return items.filter((p) => selectedCategories.includes(p.category?.id));
//   }, [items, selectedCategories]);

//   // Add navigation function
//   const handleViewDetails = (furnitureId) => {
//     navigate(`/furniture/view/${furnitureId}`);
//   };

//   return (
//     <div className="bg-[#fff8f6] min-h-screen py-6 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 ml-2">
//         {/* Mobile Filter Button */}
//         <div className="md:hidden col-span-full">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
//             </svg>
//             Filters
//             {selectedCategories.length > 0 && (
//               <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
//                 {selectedCategories.length}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Sidebar - Compact Version */}
//         <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:col-span-2`}>
//           <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
//             <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
//               Categories
//             </h3>
//             <CompactCategoryFilter
//               selectedCategories={selectedCategories}
//               onChangeSelectedCategories={setSelectedCategories}
//               productList={items}
//             />
//           </div>
//         </aside>

//         {/* Product Grid - More Space */}
//         <main className="md:col-span-10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-semibold text-gray-900">
//               {selectedCategories.length === 0
//                 ? "All Products"
//                 : `Filtered Products (${filtered.length})`}
//             </h2>
//             <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
//               {filtered.length} items
//             </span>
//           </div>

//           {/* Loading Skeleton */}
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-[420px] bg-white rounded-lg shadow-sm flex flex-col"
//                 >
//                   <div className="bg-gray-200 h-56 w-full"></div>
//                   <div className="p-4 space-y-3">
//                     <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                     <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//                     <div className="h-9 bg-gray-200 rounded w-24 mx-auto mt-4"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="text-gray-500 text-center py-16 bg-white rounded-lg border">
//               No products found for selected category.
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filtered.map((f) => {
//                 const imgUrl = buildImageUrl(f.image);
//                 return (
//                   <article
//                     key={f.id}
//                     className="group flex flex-col bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100"
//                   >
//                     <div className={styles.imgBox}>
//                       {imgUrl ? (
//                         <img
//                           src={imgUrl}
//                           alt={f.name}
//                           className={styles.img}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className={styles.noImage}>No Image</div>
//                       )}
//                     </div>

//                     <div className="flex flex-col justify-between flex-grow p-4">
//                       <div>
//                         <p className="font-medium text-gray-800 text-center mb-1 line-clamp-2 text-sm">
//                           {f.name}
//                         </p>
//                         {f.category?.name && (
//                           <p className="text-xs text-gray-500 text-center mb-2">
//                             {f.category.name}
//                           </p>
//                         )}
//                       </div>

//                       <div className="flex justify-center mt-2">
//                         <button
//                           className="inline-flex items-center justify-center px-4 py-1.5 border border-gray-800 text-xs font-medium rounded-md hover:bg-gray-900 hover:text-white transition"
//                           onClick={() => handleViewDetails(f.id)} // Updated to use navigation function
//                         >
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// // Compact Category Filter Component
// const CompactCategoryFilter = ({ selectedCategories, onChangeSelectedCategories, productList }) => {
//   const categories = useMemo(() => {
//     const categoryMap = new Map();
//     productList.forEach((product) => {
//       const category = product.category;
//       if (category) {
//         if (categoryMap.has(category.id)) {
//           categoryMap.get(category.id).count++;
//         } else {
//           categoryMap.set(category.id, { ...category, count: 1 });
//         }
//       }
//     });
//     return Array.from(categoryMap.values());
//   }, [productList]);

//   const toggleCategory = (categoryId) => {
//     if (selectedCategories.includes(categoryId)) {
//       onChangeSelectedCategories(selectedCategories.filter(id => id !== categoryId));
//     } else {
//       onChangeSelectedCategories([...selectedCategories, categoryId]);
//     }
//   };

//   const clearAll = () => {
//     onChangeSelectedCategories([]);
//   };

//   return (
//     <div className="space-y-2">
//       {/* Clear All Button */}
//       {selectedCategories.length > 0 && (
//         <button
//           onClick={clearAll}
//           className="w-full text-xs text-gray-600 hover:text-gray-900 text-left py-1"
//         >
//           Clear all filters
//         </button>
//       )}

//       {/* Category List */}
//       <div className="space-y-1">
//         <label className="flex items-center space-x-2 py-1 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={selectedCategories.length === 0}
//             onChange={clearAll}
//             className="w-3 h-3 text-gray-600 rounded"
//           />
//           <span className="text-xs text-gray-700">All Products</span>
//           <span className="text-xs text-gray-400 ml-auto">({productList.length})</span>
//         </label>

//         {categories.map((category) => (
//           <label key={category.id} className="flex items-center space-x-2 py-1 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={selectedCategories.includes(category.id)}
//               onChange={() => toggleCategory(category.id)}
//               className="w-3 h-3 text-gray-600 rounded"
//             />
//             <span className="text-xs text-gray-700 capitalize">{category.name}</span>
//             <span className="text-xs text-gray-400 ml-auto">({category.count})</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import styles from "./ProductsWithSidebar.module.css"; // optional custom css

// ✅ Build full image URL from backend path
const buildImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  const cleaned = path.replace(/^\/+/, "");
  return `http://localhost:8081/${cleaned}`;
};

export default function ProductsWithSidebar() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const res = await api.get("/api/furniture/all", { timeout: 6000 });
        if (mounted) setItems(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load products", err);
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => (mounted = false);
  }, []);

  const filtered = useMemo(() => {
    if (!selectedCategories?.length) return items;
    return items.filter((p) => selectedCategories.includes(p.category?.id));
  }, [items, selectedCategories]);

  const handleViewDetails = (furnitureId) => {
    navigate(`/furniture/view/${furnitureId}`);
  };

  const handleShare = (product) => {
    const shareText = encodeURIComponent(
      `Check out this amazing product: ${product.name}\n${window.location.origin}/furniture/view/${product.id}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#fff8f6] min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden col-span-full">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
              />
            </svg>
            Filters
            {selectedCategories.length > 0 && (
              <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                {selectedCategories.length}
              </span>
            )}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block md:col-span-2`}
        >
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              Categories
            </h3>
            <CompactCategoryFilter
              selectedCategories={selectedCategories}
              onChangeSelectedCategories={setSelectedCategories}
              productList={items}
            />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedCategories.length === 0
                ? "All Products"
                : `Filtered Products (${filtered.length})`}
            </h2>
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
              {filtered.length} items
            </span>
          </div>

          {/* Loading Skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[420px] bg-white rounded-lg shadow-sm flex flex-col"
                >
                  <div className="bg-gray-200 h-56 w-full"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-9 bg-gray-200 rounded w-24 mx-auto mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-gray-500 text-center py-16 bg-white rounded-lg border">
              No products found for selected category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((f) => {
                const mainImg = buildImageUrl(f.image);
                const hoverImg =
                  f.images && f.images.length > 0
                    ? buildImageUrl(f.images[0].image)
                    : null;

                return (
                  <article
                    key={f.id}
                    className="group flex flex-col bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100"
                  >
                    {/* ✅ Smart Image Display */}
                    <div className="relative w-full h-56 overflow-hidden">
                      {mainImg ? (
                        <>
                          <img
                            src={mainImg}
                            alt={f.name}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                              hoverImg
                                ? "opacity-100 group-hover:opacity-0"
                                : "group-hover:scale-105 group-hover:brightness-90"
                            }`}
                            loading="lazy"
                          />
                          {hoverImg && (
                            <img
                              src={hoverImg}
                              alt={`${f.name} alternate`}
                              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                              loading="lazy"
                            />
                          )}
                        </>
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-sm">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-between flex-grow p-4">
                      <div>
                        <p className="font-medium text-gray-800 text-center mb-1 line-clamp-2 text-sm">
                          {f.name}
                        </p>
                        {f.category?.name && (
                          <p className="text-xs text-gray-500 text-center mb-2">
                            {f.category.name}
                          </p>
                        )}
                      </div>

                      <div className="flex justify-center mt-2 gap-3">
                        {/* View Details Button */}
                        <button
                          className="inline-flex items-center justify-center px-4 py-1.5 border border-gray-800 text-xs font-medium rounded-md hover:bg-gray-900 hover:text-white transition"
                          onClick={() => handleViewDetails(f.id)}
                        >
                          View Details
                        </button>

                        {/* WhatsApp Share Button */}
                        <button
                          className="inline-flex items-center justify-center px-3 py-1.5 bg-green-500 text-white text-xs font-medium rounded-md hover:bg-green-600 transition"
                          onClick={() => handleShare(f)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 .02 5.34.02 12c0 2.1.55 4.12 1.59 5.93L0 24l6.2-1.63A11.87 11.87 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 22.05c-1.77 0-3.5-.47-5.02-1.37l-.36-.21-3.68.97.98-3.59-.23-.37A9.95 9.95 0 012.05 12C2.05 6.49 6.5 2.05 12 2.05c2.66 0 5.17 1.04 7.06 2.93A9.91 9.91 0 0121.95 12c0 5.51-4.45 10.05-9.95 10.05zm5.36-7.39c-.29-.14-1.71-.84-1.97-.93-.27-.1-.46-.14-.65.14s-.74.93-.91 1.12c-.17.18-.34.2-.63.07-.29-.14-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.12-.6.12-.12.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.14-.65-1.57-.9-2.15-.23-.55-.47-.47-.65-.48h-.55c-.17 0-.46.07-.7.34-.24.26-.91.89-.91 2.18 0 1.29.93 2.54 1.06 2.72.14.17 1.82 2.8 4.42 3.93.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.55-.33z" />
                          </svg>
                          Share
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ✅ Compact Category Filter
const CompactCategoryFilter = ({
  selectedCategories,
  onChangeSelectedCategories,
  productList,
}) => {
  const categories = useMemo(() => {
    const categoryMap = new Map();
    productList.forEach((product) => {
      const category = product.category;
      if (category) {
        if (categoryMap.has(category.id)) {
          categoryMap.get(category.id).count++;
        } else {
          categoryMap.set(category.id, { ...category, count: 1 });
        }
      }
    });
    return Array.from(categoryMap.values());
  }, [productList]);

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      onChangeSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      onChangeSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const clearAll = () => {
    onChangeSelectedCategories([]);
  };

  return (
    <div className="space-y-2">
      {selectedCategories.length > 0 && (
        <button
          onClick={clearAll}
          className="w-full text-xs text-gray-600 hover:text-gray-900 text-left py-1"
        >
          Clear all filters
        </button>
      )}

      <div className="space-y-1">
        <label className="flex items-center space-x-2 py-1 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedCategories.length === 0}
            onChange={clearAll}
            className="w-3 h-3 text-gray-600 rounded"
          />
          <span className="text-xs text-gray-700">All Products</span>
          <span className="text-xs text-gray-400 ml-auto">
            ({productList.length})
          </span>
        </label>

        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center space-x-2 py-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}
              className="w-3 h-3 text-gray-600 rounded"
            />
            <span className="text-xs text-gray-700 capitalize">
              {category.name}
            </span>
            <span className="text-xs text-gray-400 ml-auto">
              ({category.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
