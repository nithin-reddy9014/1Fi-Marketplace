# 1Fi Marketplace

A responsive 1Fi Marketplace web application built as part of a frontend development task.

The application allows users to explore products, search for products, view product details, select product variants, and choose flexible EMI plans.

## Features

- Responsive marketplace UI
- Shop page with three sections:
  - Top Brands
  - Nearby Stores
  - 1Fi Marketplace
- Product listing
- Product search
- Product details page
- Product image display
- Product variant selection
- EMI plan selection
- No-cost EMI information
- Responsive product grid
- Mobile-friendly bottom navigation
- Loading and error states
- Component-based React structure
- Separate CSS files for each component and page

## Tech Stack

### Frontend

- React.js
- JavaScript
- React Router DOM
- CSS
- Vite

### Data / API

- Product service API
- Dynamic product data
- Dynamic EMI plan data

## Project Structure

```text
src/
│
├── components/
│   ├── BottomNav.jsx
│   ├── BottomNav.css
│   ├── EmiPlan.jsx
│   ├── EmiPlan.css
│   ├── ProductCard.jsx
│   └── ProductCard.css
│
├── pages/
│   ├── Shop.jsx
│   ├── Shop.css
│   ├── Marketplace.jsx
│   ├── Marketplace.css
│   ├── ProductDetails.jsx
│   └── ProductDetails.css
│
├── services/
│   └── productService.js
│
├── App.jsx
├── main.jsx
└── index.css
