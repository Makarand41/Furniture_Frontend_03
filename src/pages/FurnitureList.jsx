import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../api";

const FurnitureList = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFurnitures();
  }, []);

  // ✅ Fetch all furniture items
  const fetchFurnitures = async () => {
    try {
      const res = await api.get("/api/furniture/all");
      setFurnitures(res.data);
    } catch (err) {
      console.error("Error fetching furniture:", err);
      setFurnitures([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Delete
  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${name}"?`);
    if (!confirmDelete) return;

    try {
      await api.delete(`/api/furniture/delete/${id}`);
      alert("✅ Furniture deleted successfully!");
      setFurnitures((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Failed to delete furniture!");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading furniture list...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            🪑 Furniture Inventory
          </h2>
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Furniture Table */}
        {furnitures.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No furniture records found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-amber-800 text-white">
                <tr>
                  <th className="px-6 py-3">Sr. No</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Height</th>
                  <th className="px-6 py-3">Width</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {furnitures.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-3 font-medium text-gray-700">
                      {index + 1}
                    </td>

                    {/* Furniture Image */}
                    <td className="px-6 py-3">
                      {item.image ? (
                        <img
                          src={`http://localhost:8081/${item.image.replace(/^\/+/, "")}`}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-md text-gray-500">
                          N/A
                        </div>
                      )}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-3 text-gray-800 font-medium">
                      {item.name}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-3 text-gray-600">
                      {item.category?.name || "—"}
                    </td>

                    {/* ✅ Height */}
                    <td className="px-6 py-3 text-gray-600">
                      {item.height || "—"}
                    </td>

                    {/* ✅ Width */}
                    <td className="px-6 py-3 text-gray-600">
                      {item.width || "—"}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-3 text-center flex justify-center gap-3">
                      <button
                        onClick={() => navigate(`/admin/view/${item.id}`)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                      >
                        <FaEye /> View
                      </button>

                      <button
                        onClick={() => navigate(`/furniture/edit/${item.id}`)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
                      >
                        <FaEdit /> Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id, item.name)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FurnitureList;
