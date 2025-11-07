import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    orderDate: "",
    deliveryDate: "",
  });
  const [loading, setLoading] = useState(true);

  // ✅ Fetch existing order details when page loads
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/api/orders/${id}`);
        const data = res.data;

        // Format date for input fields (yyyy-MM-dd)
        const formatDate = (dateStr) => {
          if (!dateStr) return "";
          const date = new Date(dateStr);
          return date.toISOString().split("T")[0];
        };

        setOrder({
          customerName: data.customerName || "",
          productName: data.productName || "",
          quantity: data.quantity || "",
          orderDate: formatDate(data.orderDate),
          deliveryDate: formatDate(data.deliveryDate),
        });
      } catch (error) {
        console.error("Failed to fetch order:", error);
        alert("Failed to load order details.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  // ✅ Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/orders/update/${id}`, order);
      alert("Order updated successfully!");
      navigate("/admin/orders");
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading order...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span role="img" aria-label="edit">
            ✏️
          </span>{" "}
          Edit Order
        </h2>

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={order.customerName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={order.productName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={order.quantity}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />

        <input
          type="date"
          name="orderDate"
          value={order.orderDate}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />

        <input
          type="date"
          name="deliveryDate"
          value={order.deliveryDate}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Update Order
        </button>
      </form>
    </div>
  );
};

export default EditOrder;
