const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
const token = config.get("token");

const bot = new TelegramBot(token, { polling: true });

const ngrokUrl = "https://254b-2a09-bac1-1380-00-49-bc.ngrok-free.app"; // Замените на ваш реальный URL от ngrok
const webhookUrl = `${ngrokUrl}/webhook`;

bot
  .setWebHook(webhookUrl)
  .then(() => {
    console.log(`Webhook установлен на ${webhookUrl}`);
  })
  .catch((error) => {
    console.error("Ошибка установки вебхука:", error);
  });

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ user: "volodia" });
});

// Обработка POST-запросов от Telegram
app.post("/webhook", (req, res) => {
  console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
  console.log("req.body", req.body);
  const { message } = req.body;
  if (message && message.chat && message.chat.id === -4024512546) {
    // Обрабатываем сообщение только из указанной группы
    console.log(`Получено сообщение из группы: ${message.text}`);
  }
  console.log("не получено");
  res.json({ user: message });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
