const TelegramBot = require("node-telegram-bot-api");
const config = require("config");

const token = config.get("token");

// Создайте экземпляр бота с использованием Long Polling
const bot = new TelegramBot(token, { polling: true });

// Обработчик для входящих сообщений от Telegram
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  const messageText = msg.text;

  // Делаем что-то с полученным сообщением
  if (messageText.includes("натяжные потолки") || messageText.includes("потолок")) {
    console.log(`Получено сообщение от чата ${chatId} о натяжных потолках: ${messageText}`);
    // Отправляем ответное сообщение
    bot.sendMessage(chatId, "Мы специализируемся на натяжных потолках. Как мы можем вам помочь?");
  }
  // Отправляем ответное сообщение
  b;
  // bot.sendMessage(chatId, "Спасибо за ваше сообщение!");
});

console.log("Бот запущен и слушает сообщения...");
