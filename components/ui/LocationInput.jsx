// components/ui/LocationInput.jsx
import { useState } from "react";
import { useRouter } from "next/router";

const LocationInput = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.trim()) return alert("Please enter a location");
    // Redirect to /mechanics with query param location
    router.push(`/mechanics?location=${encodeURIComponent(location)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
        className="w-full p-2 border rounded mb-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Find Nearby Mechanics
      </button>
    </form>
  );
};

export default LocationInput;
