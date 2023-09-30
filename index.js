const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
const token = config.get("token");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("token", token);
  res.json({ user: "volodia" });
});

// Обработка POST-запросов от Telegram
app.post("/webhook", (req, res) => {
  const { message } = req.body;
  if (message) {
    // Обрабатываем сообщение
    console.log(`Получено сообщение: ${message.text}`);
  }
  res.sendStatus(200);
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
