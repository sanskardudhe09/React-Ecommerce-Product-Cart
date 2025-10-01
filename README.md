# 🛒 React E-commerce Product Cart

## 📌 Project Title
**React E-commerce Product Cart**

## 🎯 Objective
To develop a React-based e-commerce application where users can browse a list of products on the home page and manage a shopping cart by adding products, adjusting quantities, and removing items.

---

## 📖 Problem Description
In today’s digital marketplace, users expect a smooth shopping experience. A critical feature is a **shopping cart** where users can:
- Add products
- Adjust quantities (with limits)
- Remove products  
 
This project implements a **feature-rich shopping cart** in React with strict quantity constraints and user-friendly interactions.

---

## ✅ Key Features

### 📦 Product Listing
- Browse products on the **Home Page**
- Each product displays:
  - Name
  - Image
  - Description
  - Price
  - "Add to Cart" button

### 🛒 Shopping Cart Management
- Add products to the cart  
- Increase/decrease quantity with buttons  
- Quantity constraints:  
  - **Minimum: 1**
  - **Maximum: 10**  
- Remove a product entirely from the cart  
- Dynamic cart updates

### ⚖️ Quantity Constraints
- Prevent users from going **below 1** or **above 10** per product
- Validation to enforce constraints

### 🎉 User Feedback
- Toast/alert messages when limits are reached  
- Confirmation message when a product is removed  

---

## 🚀 Expected Outcome
A fully interactive shopping cart where users can manage products efficiently.  
The project demonstrates **React skills in state management, context API, validation logic, and user feedback mechanisms**.

---

## 📂 File/Folder Structure
.
├── src/
|     components/
│      ├── Cart.js
|      ├── CartItem.js
|      ├── Product.js
|      ├── Product.js
│      └── Header.js
|      data/
|      ├── productData.js
|      utils/
|      ├── constants.js
├── public/
|      Images/
├── README.md
└── requirements.txt
.

---

## 🛠️ Tech Stack
- **React.js** (Frontend library)
- **Context API** (State management)
- **CSS** (Styling)
- **Toast notifications** (User feedback)

---

## ▶️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-ecommerce-cart.git
cd react-ecommerce-cart
```

### 2. Install Dependencies
```bash
   npm install
```
### 3. Start Development Server
```bash
   npm start
```
