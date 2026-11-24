# MechGo

MechGo is a roadside-assistance platform built with Next.js and MongoDB. It lets customers order **Fuel Delivery**, **Mechanic Service**, and **Car Towing**, track orders, leave feedback, and locate nearby mechanics on a map — with a full admin panel to manage categories, products, orders, and site content.

## Features

- Browse services by category (Fuel Delivery / Mechanic Service / Car Towing)
- Add items to cart and place orders
- User registration and login (NextAuth, credentials + GitHub)
- Google Maps–based mechanic locator (`/mechanics`)
- Customer feedback form
- Admin dashboard: manage categories, products, orders, sales, customer feedback, and footer/contact info
- Responsive UI built with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 12 (Pages Router)
- **Database:** MongoDB with Mongoose
- **Auth:** NextAuth.js
- **State management:** Redux Toolkit
- **Styling:** Tailwind CSS, styled-components
- **Maps:** Google Maps JavaScript API (`@react-google-maps/api`)
- **Forms & validation:** Formik + Yup
- **Charts:** Recharts (admin sales dashboard)

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- A MongoDB connection string (e.g. from MongoDB Atlas)

### Installation

```bash
git clone <your-repo-url>
cd MechGo
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXTAUTH_URL=http://localhost:3000

ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
ADMIN_TOKEN=any_long_random_string

GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> `.env` is gitignored and should never be committed — keep your own copy locally.

### Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Seeding sample data

A seed script is included to populate the database with starter categories and products:

```bash
node reset-and-seed.js
```

This clears any existing categories/products and adds Fuel Delivery, Mechanic Service, and Car Towing with sample items.

### Admin Panel

Visit `/admin` and log in with the credentials set in your `.env` (`ADMIN_USERNAME` / `ADMIN_PASSWORD`). From there you can manage categories, products, orders, sales, feedback, and the footer/contact info shown on the About page.

## Project Structure

```
MechGo/
├── components/      # UI components (admin, customer, product, layout, forms)
├── models/          # Mongoose schemas (Category, Product, Order, User, Feedback, Footer)
├── pages/           # Next.js pages + API routes
├── public/images/   # Static assets
├── redux/           # Redux store and cart slice
├── schema/          # Yup validation schemas
├── styles/          # Global styles and Tailwind config
└── util/            # Database connection helpers
```

## License

This project was built as an academic/college project.