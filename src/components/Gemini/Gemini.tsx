"use client";

import { useState } from "react";
import { sendQuestion } from "./actions";

import styles from "./styles.module.css";

interface Message {
  id: string;
  text: string;
  owner: "user" | "bot";
}

type Props = {
  questionBot: string;
  questionUser: string;
  sendButton: string;
  sendingButton: string;
};

function Gemini({
  questionBot,
  questionUser,
  sendButton,
  sendingButton,
}: Props) {
  const [message, setMessage] = useState<Message[]>([
    {
      id: "0",
      text: questionBot,
      owner: "bot",
    },
    {
      id: "1",
      text: questionUser,
      owner: "user",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const [question, setQuestion] = useState(" ");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: question,
        owner: "user",
      })
    );
    const answer = await sendQuestion(question);
    setMessage((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: answer,
        owner: "bot",
      })
    );
    setIsLoading(false);
    setQuestion("");
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
          value={question}
          onChange={handleChange}
          type="text"
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? sendingButton : sendButton}
        </button>
      </form>
    </section>
  );
}
export default Gemini;
