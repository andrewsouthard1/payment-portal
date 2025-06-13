# Payment Portal Demo Application

This is a simple Node.js application demonstrating the use of Express.js for building a RESTful API with user authentication and basic user management features.

## Features

- User registration and login
- Fetching user details
- Updating user information
- Middleware for authentication

## Project Structure

```
nodejs-demo-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes                # Contains route definitions
│   │   ├── index.js          # Main application routes
│   │   ├── users.js          # User-related routes
│   │   └── auth.js           # Authentication routes
│   ├── controllers           # Contains request handlers
│   │   ├── indexController.js # Handles root route
│   │   ├── userController.js  # Handles user-related requests
│   │   └── authController.js  # Handles authentication requests
│   ├── middlewares           # Contains middleware functions
│   │   └── authMiddleware.js  # Authentication middleware
│   ├── models                # Data models
│   │   └── userModel.js      # User model
│   └── config                # Configuration files
│       └── db.js             # Database connection
├── package.json              # npm configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-demo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

## Usage

To start the application, run:
```
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- **GET /** - Root route
- **POST /login** - User login
- **GET /users/:id** - Fetch user details
- **PUT /users/:id** - Update user information

## Payment Portal Demo Endpoints

All endpoints are prefixed with `/api/payment`.

### 1. Home
- **GET** `/api/payment/`

### 2. List Products
- **GET** `/api/payment/products`

### 3. Product Details
- **GET** `/api/payment/products/:id`

### 4. Add to Cart
- **POST** `/api/payment/cart`
  - Body: `{ "productId": 1, "quantity": 2 }`

### 5. View Cart
- **GET** `/api/payment/cart`

### 6. Checkout
- **POST** `/api/payment/checkout`

### 7. Payment Status
- **GET** `/api/payment/payment/:id`

---

**Example Usage with curl:**

```bash
# List products
curl http://localhost:3000/api/payment/products

# Add to cart
curl -X POST -H "Content-Type: application/json" -d '{"productId":1,"quantity":2}' http://localhost:3000/api/payment/cart

# View cart
curl http://localhost:3000/api/payment/cart

# Checkout
curl -X POST http://localhost:3000/api/payment/checkout

# Check payment status (replace <id> with actual paymentId)
curl http://localhost:3000/api/payment/payment/<id>
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
