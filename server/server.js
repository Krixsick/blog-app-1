const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
  origin: "http://localhost:5173/",
};

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
