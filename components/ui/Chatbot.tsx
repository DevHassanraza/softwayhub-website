"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "I need a website",
  "Tell me about AI chatbots",
  "I need custom software",
  "How can automation help?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi 👋 I'm the SoftwayHub digital assistant. Tell me what you're looking to build and I'll help point you in the right direction.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(customMessage?: string) {
    const text = (customMessage ?? input).trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply ||
          "Please contact the SoftwayHub team and we'll be happy to help.",
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. You can still reach the SoftwayHub team through our Contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi 👋 I'm the SoftwayHub digital assistant. What would you like to build?",
      },
    ]);

    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="sw-chatbot-panel sw-chatbot-ai"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* HEADER */}

            <div className="sw-chatbot-head">
              <div>
                <span className="sw-chatbot-status sw-mono">
                  <i />
                  AI ONLINE
                </span>

                <h3>SoftwayHub Assistant</h3>

                <p>Software • Digital • AI</p>
              </div>

              <div className="sw-chatbot-head-actions">
                <button
                  type="button"
                  onClick={clearChat}
                  aria-label="Start new conversation"
                  title="New conversation"
                >
                  ↻
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chatbot"
                >
                  ×
                </button>
              </div>
            </div>

            {/* MESSAGES */}

            <div className="sw-chatbot-conversation">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`sw-chat-message ${
                    message.role === "user"
                      ? "sw-chat-message-user"
                      : "sw-chat-message-ai"
                  }`}
                >
                  {message.role === "assistant" && (
                    <span className="sw-chat-avatar sw-mono">
                      SW
                    </span>
                  )}

                  <div className="sw-chat-bubble">
                    {message.content}
                  </div>
                </div>
              ))}

              {/* LOADING */}

              {loading && (
                <div className="sw-chat-message sw-chat-message-ai">
                  <span className="sw-chat-avatar sw-mono">
                    SW
                  </span>

                  <div className="sw-chat-bubble sw-chat-thinking">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK QUESTIONS */}

            {messages.length === 1 && (
              <div className="sw-chat-quick">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={loading}
                  >
                    {question}
                    <span>↗</span>
                  </button>
                ))}
              </div>
            )}

            {/* INPUT */}

            <form
              className="sw-chat-input-area"
              onSubmit={handleSubmit}
            >
              <div className="sw-chat-input-wrap">
                <input
                  type="text"
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask SoftwayHub..."
                  maxLength={500}
                  disabled={loading}
                  autoComplete="off"
                  aria-label="Message SoftwayHub assistant"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                >
                  ↑
                </button>
              </div>

              <div className="sw-chat-bottom">
                <span className="sw-mono">
                  AI ASSISTANT
                </span>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Talk to our team ↗
                </Link>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}

      <motion.button
        type="button"
        className={`sw-chatbot-trigger ${
          open ? "is-open" : ""
        }`}
        onClick={() => setOpen((current) => !current)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={
          open
            ? "Close SoftwayHub assistant"
            : "Open SoftwayHub assistant"
        }
        aria-expanded={open}
      >
        <span className="sw-chatbot-trigger-ring" />

        <span className="sw-chatbot-trigger-icon">
          {open ? "×" : "AI"}
        </span>

        {!open && (
          <span className="sw-chatbot-trigger-dot" />
        )}
      </motion.button>
    </>
  );
}