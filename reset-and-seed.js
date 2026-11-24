// reset-and-seed.js
//
// WARNING: this DELETES every existing category and product in your
// database (the old Bengali / burger menu included), then adds the
// Fuel Delivery / Mechanic Service / Car Towing categories and items.
//
// HOW TO USE:
// 1. Copy this file into your project root (next to package.json and .env)
// 2. Run:  node reset-and-seed.js
// 3. Refresh your /menu page - only the new items will be there.

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

function loadEnv() {
  const envPath = path.join(__dirname, ".env");
  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const idx = trimmed.indexOf("=");
    if (idx === -1) return;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });
}
loadEnv();

const CategorySchema = new mongoose.Schema(
  { title: { type: String, required: true } },
  { timestamps: true }
);
const ProductSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    prices: [Number],
    category: String,
    img: String,
    extraOptions: [{ text: String, price: Number }],
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

const categories = ["Fuel Delivery", "Mechanic Service", "Car Towing"];

const products = [
  {
    title: "Petrol Delivery",
    desc: "On-demand petrol delivered straight to your vehicle, anywhere in the city.",
    prices: [150],
    category: "Fuel Delivery",
    img: "/images/petrol.jpeg",
  },
  {
    title: "Diesel Delivery",
    desc: "Fast diesel top-up service for cars, trucks and generators.",
    prices: [140],
    category: "Fuel Delivery",
    img: "/images/diesel.jpeg",
  },
  {
    title: "Emergency Fuel Top-up",
    desc: "Out of fuel on the road? Get a quick top-up to reach the nearest station.",
    prices: [100],
    category: "Fuel Delivery",
    img: "/images/fuel need.jpeg",
  },
  {
    title: "Roadside Mechanic Visit",
    desc: "A mechanic comes to your location to diagnose and fix common issues on the spot.",
    prices: [300],
    category: "Mechanic Service",
    img: "/images/mechanic 1.jpeg",
  },
  {
    title: "Basic Repair Service",
    desc: "Quick fixes for minor mechanical problems using our on-site repair kit.",
    prices: [200],
    category: "Mechanic Service",
    img: "/images/Repair kit.jpeg",
  },
  {
    title: "Tool Assistance",
    desc: "Get the right tools on the spot with help from our mechanic team.",
    prices: [120],
    category: "Mechanic Service",
    img: "/images/tools.png",
  },
  {
    title: "Car Towing Service",
    desc: "Safe, reliable towing for breakdowns, accidents, or vehicle transport.",
    prices: [500],
    category: "Car Towing",
    img: "/images/towing.jpeg",
  },
];

async function run() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI not found - make sure .env is in this same folder.");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  const catResult = await Category.deleteMany({});
  console.log(`Deleted ${catResult.deletedCount} old categories`);

  const prodResult = await Product.deleteMany({});
  console.log(`Deleted ${prodResult.deletedCount} old products`);

  for (const title of categories) {
    await Category.create({ title });
    console.log("Added category:", title);
  }

  for (const p of products) {
    await Product.create(p);
    console.log("Added product:", p.title);
  }

  console.log("Done! Refresh your /menu page.");
  await mongoose.connection.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});