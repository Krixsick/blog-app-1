const express = require("express");
const app = express();
app.use(express.json());

// In-memory storage (for demo purposes)
const blogs = [];
const cors = require("cors");
app.use(cors());

// POST endpoint to add a blog
app.post("/api/blogs", (req, res) => {
  const newBlog = { id: Date.now(), ...req.body };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// GET endpoint to retrieve all blogs
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.listen(3000, () => console.log("Server running on port 3000"));
