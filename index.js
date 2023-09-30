const TelegramBot = require("node-telegram-bot-api");

const config = require("config");

const token = config.get("token");

const bot = new TelegramBot(token, { polling: true });

// Задайте ключевые слова и их склонения
const keywordMappings = [
  ["потолок", "потолка", "потолку", "потолок", "потолком", "потолки"],
  [
    "натяжной потолок",
    "натяжного потолка",
    "натяжному потолку",
    "натяжный потолок",
    "натяжным потолком",
  ],
  ["потолочный", "потолочного", "потолочному", "потолочный", "потолочным"],
  [
    "стеклянный потолок",
    "стеклянного потолка",
    "стеклянному потолку",
    "стеклянный потолок",
    "стеклянным потолком",
  ],
  // Добавьте здесь другие вариации
];

// Обработчик для входящих сообщений от Telegram
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text.toLowerCase(); // Приводим текст сообщения к нижнему регистру

  // Проверяем, содержит ли сообщение хотя бы одно ключевое слово (с учетом склонения)

  console.log("messageText", messageText);

  const containsKeyword = keywordMappings.some((keywords) =>
    keywords.some((keyword) => {
      console.log("keyword", keyword);
      return messageText.includes(keyword);
    })
  );

  if (containsKeyword) {
    bot.sendMessage(chatId, "Мы специализируемся на натяжных потолках. Как мы можем вам помочь?");
  }
});

console.log("Бот запущен и слушает сообщения...");
