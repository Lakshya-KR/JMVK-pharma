# JMVK Pharma Website

A full-stack pharmaceutical company website built with React.js and Node.js.

## Features

- Home Page with brand story and mission
- Product Catalog (Tablets, Syrups, Injections, etc.)
- Contact Page with form and address/map
- About Us, Vision/Mission, CSR activities
- Career Page
- Login/Register Panel for clients/distributors
- Admin Panel for product management

## Tech Stack

- Frontend: React.js (Vite)
- Backend: Node.js + Express.js
- Database: MongoDB
- Admin Panel: React Admin

## Project Structure

```
JMVK-pharma/
├── client/          # React frontend
├── server/          # Express backend
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 