import { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    rating: "",
    bestItem: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          name: "",
          batch: "",
          rating: "",
          bestItem: "",
          message: "",
        });
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Give Feedback</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          placeholder="Customer ID"
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          className="p-2 border rounded"
          min={1}
          max={5}
          required
        />
        <input
          type="text"
          name="bestItem"
          value={formData.bestItem}
          onChange={handleChange}
          placeholder="Best Service You Used"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Feedback"
          className="p-2 border rounded"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;