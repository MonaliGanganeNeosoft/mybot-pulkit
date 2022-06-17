const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const chatbotRoutes = require("./routes/chatbotRoutes");
app.get("/", (req, res) => {
  console.log("work");
  res.send("working");
});
app.use("/chatbot", chatbotRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is working on 5000");
});
