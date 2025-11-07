// import React, { useState } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";

// const AddOrder = () => {
//   const [order, setOrder] = useState({
//     customerName: "",
//     productName: "",
//     quantity: "",
//     orderDate: "",
//     deliveryDate: "",
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setOrder({ ...order, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/api/orders/create", order);
//       setMessage("✅ Order added successfully!");
//       setTimeout(() => navigate("/admin/orders"), 1000);
//     } catch (err) {
//       setMessage("❌ Failed to add order!");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border border-gray-200">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           🧾 Add New Order
//         </h2>

//         {message && (
//           <p
//             className={`text-center mb-4 font-medium ${
//               message.startsWith("✅") ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="customerName"
//             placeholder="Customer Name"
//             value={order.customerName}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
//           />

//           <input
//             type="text"
//             name="productName"
//             placeholder="Product Name"
//             value={order.productName}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
//           />

//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             value={order.quantity}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
//           />

//           <input
//             type="date"
//             name="orderDate"
//             value={order.orderDate}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
//           />

//           <input
//             type="date"
//             name="deliveryDate"
//             value={order.deliveryDate}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-amber-700 text-white font-semibold py-3 rounded-md hover:bg-amber-800 transition"
//           >
//             Save Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddOrder;
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    orderDate: "",
    deliveryDate: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/orders/create", order);
      setMessage("✅ Order added successfully!");
      setTimeout(() => navigate("/admin/orders"), 1000);
    } catch (err) {
      setMessage("❌ Failed to add order!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border border-gray-200 relative">
        {/* 🔙 Go Back Button */}
        <button
          onClick={() => navigate("/admin/orders")}
          className="absolute top-4 left-4 bg-gray-800 hover:bg-black text-white text-sm px-4 py-1.5 rounded-md transition"
        >
          ⬅ Go Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 mt-4">
          🧾 Add New Order
        </h2>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={order.customerName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={order.productName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={order.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <input
            type="date"
            name="orderDate"
            value={order.orderDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <input
            type="date"
            name="deliveryDate"
            value={order.deliveryDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-semibold py-3 rounded-md hover:bg-amber-800 transition"
          >
            Save Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
