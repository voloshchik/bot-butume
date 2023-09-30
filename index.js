const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const config = require("config");

const token = process.env.TOKEN;
console.log("token", token);

const bot = new TelegramBot(token, { polling: true });
const sendTo = process.env.SEND__TO;
console.log("sendTo", sendTo);

// Задайте ключевые слова и их склонения
const keywordMappings = config.get("keywordMappings");

// Обработчик для входящих сообщений от Telegram
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text.toLowerCase(); // Приводим текст сообщения к нижнему регистру
  console.log("messageText", messageText);
  // Проверяем, содержит ли сообщение хотя бы одно ключевое слово (с учетом склонения)
  const containsKeyword = keywordMappings.some((keywords) =>
    keywords.some((keyword) => {
      return messageText.includes(keyword);
    })
  );

  if (containsKeyword) {
    bot.sendMessage(chatId, "Мы специализируемся на натяжных потолках. Как мы можем вам помочь?");
  }
});

console.log("Бот запущен и слушает сообщения...");
