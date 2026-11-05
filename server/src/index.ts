import express from "express";

const app = express();
const port = process.env.PORT ?? 3001;

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
