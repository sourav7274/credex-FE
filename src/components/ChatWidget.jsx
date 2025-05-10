import { useState } from "react";

// const exampleResponses = {
//   "how do i sell my license":
//     "To sell your license, click 'Get a Free Quote' and fill out the form.",
//   "what license types do you support":
//     "We support Microsoft Office, Adobe Suite, and Antivirus licenses.",
// };

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const loadingMessage = { from: "bot", text: "Thinking..." };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for SoftSell.",
            },
            { role: "user", content: input },
          ],
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const botText =
        data.choices?.[0]?.message?.content?.trim() || "Sorry, no response.";
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: botText },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: "Failed to get response." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h4 className="font-bold text-sm">SoftSell AI Assistant</h4>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.from === "bot"
                    ? "bg-gray-200 dark:bg-gray-700 text-left"
                    : "bg-blue-500 text-white text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 text-sm bg-transparent outline-none dark:text-white"
              placeholder="Type your question..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-3 text-blue-500 dark:text-blue-300"
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow"
        >
          Chat 💬
        </button>
      )}
    </div>
  );
}

export default ChatWidget;
