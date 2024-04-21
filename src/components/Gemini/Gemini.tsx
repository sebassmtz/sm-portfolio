"use client";

import { useState } from "react";
import { sendQuestion } from "./actions";

import styles from "./styles.module.css";

interface Message {
  id: string;
  text: string;
  owner: "user" | "bot";
}

function Gemini() {
  const [message, setMessage] = useState<Message[]>([
    {
      id: "0",
      text: "Ask me anything about Sebastian Martinez!",
      owner: "bot",
    },
    {
      id: "1",
      text: "I'm a bot, so I can't answer everything, but I'll do my best!",
      owner: "user",
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    setMessage((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: formData.get("question") as string,
        owner: "user",
      })
    );
    const answer = await sendQuestion(formData.get("question") as string);
    setMessage((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: answer,
        owner: "bot",
      })
    );
    setIsLoading(false);
  }

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        {message.map((message) => (
          <div
            key={message.id}
            className={`
          ${styles.message}
          ${message.owner === "user" ? `${styles.bot}` : ""}
          `}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </article>
      <form
        onSubmit={handleSubmit}
        className={styles.flex}
      >
        <input
          className={styles.input}
          name="question"
          type="text"
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
export default Gemini;
