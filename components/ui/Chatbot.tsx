"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickPrompts = [
  {
    label: "Our Services",
    prompt: "What services does SoftwayHub provide?",
    icon: "⚙",
  },
  {
    label: "AI & Chatbots",
    prompt: "Tell me about SoftwayHub AI and chatbot solutions.",
    icon: "✦",
  },
  {
    label: "Our Work",
    prompt: "Tell me about the type of projects SoftwayHub builds.",
    icon: "▣",
  },
  {
    label: "Start a Project",
    prompt: "I want to start a project with SoftwayHub.",
    icon: "↗",
  },
];

function RobotMascot({
  small = false,
}: {
  small?: boolean;
}) {
  return (
    <div
      className={`swh-robot ${
        small ? "swh-robot--small" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 180 190"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="robotWhite"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cfd8e6" />
          </linearGradient>

          <linearGradient
            id="robotRed"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#ff3950" />
            <stop offset="100%" stopColor="#b90024" />
          </linearGradient>

          <linearGradient
            id="robotFace"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#07111f" />
            <stop offset="100%" stopColor="#01040a" />
          </linearGradient>

          <filter
            id="robotGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* WHITE SHIRT */}

        <path
          d="M49 122C54 106 68 98 90 98C112 98 127 107 132 122L143 174H37L49 122Z"
          fill="url(#robotWhite)"
          stroke="#ffffff"
          strokeOpacity=".75"
          strokeWidth="2"
        />

        <path
          d="M74 103L90 124L106 103"
          fill="none"
          stroke="#aeb9c9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M90 124V170"
          stroke="#c4ccd8"
          strokeWidth="2"
        />

        {/* SMALL RED DETAIL ON SHIRT */}

        <path
          d="M98 137L109 137"
          stroke="#ff1e3b"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* NECK */}

        <rect
          x="78"
          y="87"
          width="24"
          height="22"
          rx="8"
          fill="#dce4ee"
        />

        {/* HEADPHONES BAND */}

        <path
          d="M47 59C47 28 65 13 90 13C115 13 133 28 133 59"
          fill="none"
          stroke="url(#robotRed)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <path
          d="M50 58C50 31 66 18 90 18C114 18 130 31 130 58"
          fill="none"
          stroke="#ff596b"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".75"
        />

        {/* HEAD */}

        <rect
          x="48"
          y="31"
          width="84"
          height="72"
          rx="31"
          fill="url(#robotWhite)"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* FACE */}

        <rect
          x="58"
          y="42"
          width="64"
          height="49"
          rx="20"
          fill="url(#robotFace)"
          stroke="#172b44"
          strokeWidth="2"
        />

        {/* EYES */}

        <path
          d="M72 67C76 59 83 59 87 67"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#robotGlow)"
        />

        <path
          d="M94 67C98 59 105 59 109 67"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#robotGlow)"
        />

        {/* HEADPHONE SIDES */}

        <rect
          x="38"
          y="53"
          width="17"
          height="36"
          rx="8"
          fill="url(#robotRed)"
        />

        <rect
          x="125"
          y="53"
          width="17"
          height="36"
          rx="8"
          fill="url(#robotRed)"
        />

        <rect
          x="42"
          y="59"
          width="7"
          height="24"
          rx="3"
          fill="#ff6676"
          opacity=".8"
        />

        <rect
          x="131"
          y="59"
          width="7"
          height="24"
          rx="3"
          fill="#ff6676"
          opacity=".8"
        />

        {/* MIC */}

        <path
          d="M134 79C151 80 151 91 143 95"
          fill="none"
          stroke="#d3122f"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle
          cx="141"
          cy="95"
          r="5"
          fill="#ff2945"
        />

        {/* ARMS */}

        <path
          d="M48 125C31 128 22 141 18 157"
          fill="none"
          stroke="url(#robotWhite)"
          strokeWidth="17"
          strokeLinecap="round"
        />

        <path
          d="M132 125C146 126 155 134 161 146"
          fill="none"
          stroke="url(#robotWhite)"
          strokeWidth="17"
          strokeLinecap="round"
        />

        {/* HAND */}

        <circle
          cx="164"
          cy="148"
          r="11"
          fill="#d9e2ee"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! 👋 I'm the SoftwayHub AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (
    customMessage?: string
  ) => {
    const text = (
      customMessage ?? input
    ).trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const nextMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ||
            "Thanks for reaching out. Please contact our team for more information.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I’m having a little trouble connecting right now. You can still reach SoftwayHub through the contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi there! 👋 I'm the SoftwayHub AI Assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="swh-chat"
            initial={{
              opacity: 0,
              y: 24,
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
              duration: 0.26,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* HEADER */}

            <div className="swh-chat-header">
              <div className="swh-chat-header-main">
                <div className="swh-chat-header-avatar">
                  <RobotMascot small />
                </div>

                <div>
                  <h3>
                    SoftwayHub AI Assistant
                  </h3>

                  <div className="swh-chat-status">
                    <i />

                    <span>Online</span>

                    <b>•</b>

                    <span>
                      Here to help
                    </span>
                  </div>
                </div>
              </div>

              <div className="swh-chat-header-actions">
                <button
                  type="button"
                  onClick={resetChat}
                  aria-label="Reset conversation"
                  title="Reset chat"
                >
                  ↻
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  aria-label="Close chatbot"
                >
                  ×
                </button>
              </div>
            </div>

            {/* BODY */}

            <div className="swh-chat-body">
              <div className="swh-chat-intro">
                <div className="swh-chat-intro-avatar">
                  <RobotMascot small />
                </div>

                <div className="swh-chat-intro-card">
                  <span>
                    👋 Hi there!
                  </span>

                  <p>
                    I&apos;m{" "}
                    <strong>
                      SoftwayHub AI Assistant.
                    </strong>
                    <br />
                    How can I help you today?
                  </p>
                </div>
              </div>

              {/* QUICK ACTIONS */}

              {messages.length === 1 && (
                <motion.div
                  className="swh-chat-quick"
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                >
                  {quickPrompts.map(
                    (item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() =>
                          sendMessage(
                            item.prompt
                          )
                        }
                      >
                        <span>
                          {item.icon}
                        </span>

                        {item.label}

                        <b>↗</b>
                      </button>
                    )
                  )}
                </motion.div>
              )}

              {/* MESSAGES */}

              <div className="swh-chat-messages">
                {messages
                  .slice(1)
                  .map(
                    (
                      message,
                      index
                    ) => (
                      <motion.div
                        key={`${message.role}-${index}`}
                        className={`swh-chat-message swh-chat-message--${message.role}`}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                      >
                        {message.role ===
                          "assistant" && (
                          <div className="swh-chat-message-avatar">
                            <RobotMascot
                              small
                            />
                          </div>
                        )}

                        <div className="swh-chat-bubble">
                          {
                            message.content
                          }
                        </div>
                      </motion.div>
                    )
                  )}

                {loading && (
                  <div className="swh-chat-message swh-chat-message--assistant">
                    <div className="swh-chat-message-avatar">
                      <RobotMascot small />
                    </div>

                    <div className="swh-chat-bubble swh-chat-typing">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}

                <div
                  ref={
                    messagesEndRef
                  }
                />
              </div>
            </div>

            {/* FOOTER */}

            <div className="swh-chat-footer">
              <form
                onSubmit={handleSubmit}
                className="swh-chat-form"
              >
                <input
                  value={input}
                  onChange={(event) =>
                    setInput(
                      event.target.value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder="Type your message..."
                  disabled={loading}
                  aria-label="Chat message"
                />

                <motion.button
                  type="submit"
                  disabled={
                    loading ||
                    !input.trim()
                  }
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  aria-label="Send message"
                >
                  ↗
                </motion.button>
              </form>

              <div className="swh-chat-powered">
                <span>
                  ✦ Powered by{" "}
                  <strong>
                    SoftwayHub
                  </strong>
                </span>

                <span>
                  Ideas to Real Solutions.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    {/* =====================================
        SMALL HR-APPROVED CHAT LAUNCHER
    ===================================== */}

    <div
    className={`swh-chat-launcher-wrap ${
        isOpen ? "swh-chat-launcher-wrap--open" : ""
    }`}
    >
<motion.button
        className="swh-chat-launcher"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{
        y: -2,
        }}
        whileTap={{
        scale: 0.94,
        }}
        aria-label={
        isOpen
            ? "Close SoftwayHub AI Assistant"
            : "Open SoftwayHub AI Assistant"
        }
    >
        <span className="swh-chat-launcher-white-glow" />

        <motion.span
        className="swh-chat-launcher-robot"
        animate={
            isOpen
            ? {
                rotate: 0,
                y: 0,
                }
            : {
                rotate: [0, -2, 2, 0],
                y: [0, -1, 0],
                }
        }
        transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
        }}
        >
        <RobotMascot />
        </motion.span>

        {!isOpen && (
          <span className="swh-chat-shirt-badge" aria-hidden="true">
            <span>LET&apos;S</span>
            <span>CHAT</span>
          </span>
        )}

        {!isOpen && (
        <span className="swh-chat-notification">
            1
        </span>
        )}
    </motion.button>
    </div>
    </>
  );
}