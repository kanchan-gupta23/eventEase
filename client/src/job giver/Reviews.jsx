import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgAttachment } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const initialReviews = [
  {
    id: 1,
    user: "Aarav Sharma",
    review: "Absolutely loved the setup. Flawless coordination!",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    id: 2,
    user: "Meera Iyer",
    review: "Team was super friendly and creative. Highly recommend!",
    image: "",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ review: "", file: "" });
  const [previewUrl, setPreviewUrl] = useState("");
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    review: "",
    file: "",
    preview: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setForm({ ...form, file: files[0] });
      setPreviewUrl(url);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      user: "Demo User",
      review: form.review,
      image: previewUrl,
    };
    setReviews([newReview, ...reviews]);
    setForm({ review: "", file: "" });
    setPreviewUrl("");
  };

  const handleEdit = (r) => {
    setEditId(r.id);
    setEditForm({ review: r.review, file: "", preview: r.image });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedReviews = reviews.map((r) =>
      r.id === editId
        ? { ...r, review: editForm.review, image: editForm.preview }
        : r
    );
    setReviews(updatedReviews);
    setEditId(null);
    setEditForm({ review: "", file: "", preview: "" });
  };

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file" && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setEditForm((prev) => ({ ...prev, preview: url }));
    } else {
      setEditForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e3f2fd] to-[#e1f5fe] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center text-blue-800 font-bold mb-10">
          💬 Share Your EventEase Experience
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md mb-10 border border-blue-100 space-y-4"
        >
          <div>
            <label className="font-semibold text-blue-700">Review</label>
            <textarea
              name="review"
              value={form.review}
              onChange={handleChange}
              placeholder="Write your review..."
              className="w-full mt-2 p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-300 text-gray-700"
            />
          </div>

          <div>
            <label className="font-semibold text-blue-700">Attach Image</label>
            <div className="flex items-center gap-2 mt-1">
              <label
                htmlFor="file"
                className="cursor-pointer text-xl text-blue-600"
              >
                <CgAttachment />
              </label>
              <input
                id="file"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="h-16 w-auto rounded-md object-cover border"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            Submit Review ✨
          </button>
        </form>

        <h2 className="text-3xl font-semibold text-blue-800 mb-6">
          📝 User Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/60 backdrop-blur p-4 rounded-2xl shadow-md border border-blue-100 relative"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-blue-800">{r.user}</p>
                <div className="flex gap-3 text-blue-600">
                  <FaEdit
                    className="cursor-pointer"
                    onClick={() => handleEdit(r)}
                  />
                  <MdDelete
                    className="cursor-pointer"
                    onClick={() => deleteReview(r.id)}
                  />
                </div>
              </div>

              {editId === r.id ? (
                <form onSubmit={handleUpdate} className="mt-4 space-y-2">
                  <textarea
                    name="review"
                    value={editForm.review}
                    onChange={handleEditChange}
                    className="w-full p-2 rounded border border-blue-200"
                  />
                  <input
                    type="file"
                    name="file"
                    onChange={handleEditChange}
                    className="block"
                  />
                  {editForm.preview && (
                    <img src={editForm.preview} className="h-20 mt-2 rounded" />
                  )}
                  <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <p className="text-gray-700 mt-2 italic">“{r.review}”</p>
                  {r.image && (
                    <img
                      src={r.image}
                      alt="review"
                      className="mt-3 h-24 rounded border border-blue-200 object-cover"
                    />
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
