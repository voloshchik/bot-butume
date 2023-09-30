const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
const token = config.get("token");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ user: "volodia" });
});

// Обработка POST-запросов от Telegram
app.post("/webhook", (req, res) => {
  console.log("req.body", req.body);
  const { message } = req.body;
  if (message) {
    // Обрабатываем сообщение
    console.log(`Получено сообщение: ${message}`);
  }
  console.log("");
  res.json({ user: message });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
