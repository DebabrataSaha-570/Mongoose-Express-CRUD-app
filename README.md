# Mongoose Express CRUD App

## Project Description:

This is a Node js Express Application with TypeScript as a programming language, integrating MongoDB with Mongoose for user data and order management. This application uses data validation with Joi.

## Features:

- User Management: create, retrive, update and delete user.
- Orders Management : Add order, get order for a specefic user and get total price of orders of a specefic user.

## Getting Started

**Prequisists**

- Node js
- MongoDB
- npm

**Installing**

i) Clone the repository:

```
https://github.com/DebabrataSaha-570/Mongoose-Express-CRUD-app.git
```

ii) Install Dependencies:

```
npm install
```

iii) Run Application:

```
npm run start:dev
```

The application will run on `http://localhost:5000/` by default.

## API Endpoints

**User Management**

- Create New User: `POST /api/users `
- Retrieve a list of all users : `GET /api/users`
- Retrieve a specific user by ID : ` GET /api/users/:userId`
- Update user information : `PUT /api/users/:userId`
- Delete a user : `DELETE /api/users/:userId`

**Order Management\***

- Add New Product in Order : ` PUT /api/users/:userId/orders`
- Retrieve all orders for a specific user : `GET /api/users/:userId/orders`
- Calculate Total Price of Orders for a Specific User : `GET /api/users/:userId/orders/total-price`

## Technologies

- Node js
- Express js
- TypeScript
- MongoDB
- Mongoose
