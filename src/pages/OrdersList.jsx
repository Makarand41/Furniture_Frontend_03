// import React, { useEffect, useState } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";

// const OrdersList = () => {
//   const [orders, setOrders] = useState([]);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await api.get("/api/orders/all");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Failed to fetch orders", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this order?")) return;
//     try {
//       await api.delete(`/api/orders/delete/${id}`);
//       setMessage("🗑️ Order deleted successfully!");
//       fetchOrders();
//     } catch (err) {
//       setMessage("❌ Failed to delete order.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">📋 Orders List</h2>
//           <button
//             onClick={() => navigate("/admin/orders/add")}
//             className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-md"
//           >
//             ➕ Add Order
//           </button>
//         </div>

//         {message && (
//           <p
//             className={`mb-4 font-medium ${
//               message.startsWith("🗑️") ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-200 text-sm text-gray-700">
//             <thead className="bg-amber-50">
//               <tr>
//                 <th className="border px-4 py-3 text-left">ID</th>
//                 <th className="border px-4 py-3 text-left">Customer Name</th>
//                 <th className="border px-4 py-3 text-left">Product Name</th>
//                 <th className="border px-4 py-3 text-left">Quantity</th>
//                 <th className="border px-4 py-3 text-left">Order Date</th>
//                 <th className="border px-4 py-3 text-left">Delivery Date</th>
//                 <th className="border px-4 py-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="text-center py-6 text-gray-500 font-medium"
//                   >
//                     No orders found.
//                   </td>
//                 </tr>
//               ) : (
//                 orders.map((o) => (
//                   <tr
//                     key={o.id}
//                     className="hover:bg-gray-50 transition-all duration-200"
//                   >
//                     <td className="border px-4 py-2">{o.id}</td>
//                     <td className="border px-4 py-2">{o.customerName}</td>
//                     <td className="border px-4 py-2">{o.productName}</td>
//                     <td className="border px-4 py-2">{o.quantity || "-"}</td>
//                     <td className="border px-4 py-2">{o.orderDate}</td>
//                     <td className="border px-4 py-2">{o.deliveryDate}</td>
//                     <td className="border px-4 py-2 text-center space-x-3">
//                       <button
//                         onClick={() => navigate(`/admin/orders/edit/${o.id}`)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(o.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrdersList;

import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/api/orders/all");
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await api.delete(`/api/orders/delete/${id}`);
      setMessage("🗑️ Order deleted successfully!");
      fetchOrders();
    } catch (err) {
      setMessage("❌ Failed to delete order.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* ✅ Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">📋 Orders List</h2>
          <div className="flex gap-3">
            {/* ➕ Add Order Button */}
            <button
              onClick={() => navigate("/admin/orders/add")}
              className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-md"
            >
              ➕ Add Order
            </button>

            {/* ⬅ Go Back Button */}
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-md transition"
            >
              ⬅ Go Back
            </button>
          </div>
        </div>

        {/* ✅ Message Display */}
        {message && (
          <p
            className={`mb-4 font-medium ${
              message.startsWith("🗑️") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* ✅ Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm text-gray-700">
            <thead className="bg-amber-50">
              <tr>
                <th className="border px-4 py-3 text-left">ID</th>
                <th className="border px-4 py-3 text-left">Customer Name</th>
                <th className="border px-4 py-3 text-left">Product Name</th>
                <th className="border px-4 py-3 text-left">Quantity</th>
                <th className="border px-4 py-3 text-left">Order Date</th>
                <th className="border px-4 py-3 text-left">Delivery Date</th>
                <th className="border px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((o) => (
                  <tr
                    key={o.id}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="border px-4 py-2">{o.id}</td>
                    <td className="border px-4 py-2">{o.customerName}</td>
                    <td className="border px-4 py-2">{o.productName}</td>
                    <td className="border px-4 py-2">{o.quantity || "-"}</td>
                    <td className="border px-4 py-2">{o.orderDate}</td>
                    <td className="border px-4 py-2">{o.deliveryDate}</td>
                    <td className="border px-4 py-2 text-center space-x-3">
                      <button
                        onClick={() => navigate(`/admin/orders/edit/${o.id}`)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(o.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
