# Fast Food Restaurant System Frontend

This project is a frontend application for a fast food restaurant system. It is built using React and TypeScript, providing a user-friendly interface for customers, staff, kitchen employees, managers, and delivery personnel.

## Features

### Customer Features
- **Menu List**: View available menu items.
- **Product Card**: Detailed view of individual menu items.
- **Cart**: Manage selected items before checkout.
- **Checkout**: Process orders and payments.

### Staff Features
- **Orders Queue**: View incoming orders.
- **Staff Orders**: Manage and update order statuses.

### Kitchen Features
- **Kitchen Board**: Display orders for kitchen staff.
- **Order Preparation**: Update the status of food preparation.

### Manager Features
- **Reports**: View sales and performance reports.
- **Admin Panel**: Manage restaurant operations.

### Delivery Features
- **Delivery Tracker**: Track the status of deliveries.
- **Delivery Orders**: View assigned delivery orders.

## Project Structure

```
fast-food-frontend
├── public
│   └── index.html
├── src
│   ├── api
│   ├── components
│   ├── features
│   ├── hooks
│   ├── pages
│   ├── store
│   ├── styles
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tests
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
└── .prettierrc
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd fast-food-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.