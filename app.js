const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Database configuration
const dbConfig = {
  user: 'deepak',
  password: 'Password@1',
  server: '16.98.116.132', // Replace 'YOUR_SERVER_IP' with your server's IP address
  database: 'db1' ,
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true // Enable ArithAbort
  }
};

// Function to handle database errors
const handleDatabaseError = (error, res) => {
  console.error('Database error:', error);
  res.status(500).json({ error: 'Database error' });
};

// Connect to the database
const connectToDatabase = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

// Create a new product
app.post('/products', async (req, res) => {
  // Your code for creating a new product
});

// Retrieve all products with optional filtering
app.get('/products', async (req, res) => {
  // Your code for retrieving all products
});

// Retrieve a single product by ID
app.get('/products/:ID', async (req, res) => {
  // Your code for retrieving a single product by ID
});

// Update a product by ID
app.put('/products/:ID', async (req, res) => {
  // Your code for updating a product by ID
});

// Delete a product by ID
app.delete('/products/:ID', async (req, res) => {
  // Your code for deleting a product by ID
});

// Start the server
const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
