"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, MessageSquare } from "lucide-react";
import { CHAT_QA } from "@/lib/data";

type Msg = { from: "bot" | "user"; text: string };

export default function Chatbot() {
  const [level, setLevel] = useState<keyof typeof CHAT_QA>("general");
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Assalam-o-Alaikum! I'm the GAK Assistant. Pick a topic above and tap a question, or type your own below." },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const ask = (q: string, a: string) => {
    setMessages((m) => [...m, { from: "user", text: q }]);
    setTimeout(() => setMessages((m) => [...m, { from: "bot", text: a }]), 420);
  };

  const send = () => {
    const q = draft.trim();
    if (!q) return;
    setDraft("");
    ask(q, "Thanks for your question — our team will get back to you. Meanwhile, try one of the suggested questions above for an instant answer.");
  };

  return (
    <>
      <div className="chat">
        <div className="chd">
          <div className="av"><Bot size={22} strokeWidth={1.75} aria-hidden /></div>
          <div>
            <div className="nm">GAK Assistant</div>
            <div className="st">Online · pre-defined queries</div>
          </div>
        </div>

        <div className="lvtabs">
          {(Object.keys(CHAT_QA) as (keyof typeof CHAT_QA)[]).map((k) => (
            <button
              key={k}
              className={`lvtab ${level === k ? "active" : ""}`}
              onClick={() => setLevel(k)}
            >
              {CHAT_QA[k].label}
            </button>
          ))}
        </div>

        <div className="body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bub ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="chips">
          {CHAT_QA[level].qa.map(([q, a]) => (
            <button key={q} className="chip" onClick={() => ask(q, a)}>
              {q}
            </button>
          ))}
        </div>

        <form
          className="composer"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a question…"
            aria-label="Type a question"
          />
          <button type="submit" aria-label="Send message">
            <Send size={18} strokeWidth={1.75} aria-hidden />
          </button>
        </form>
      </div>
      <div className="note-box mt2 inline-ic" style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        <MessageSquare size={18} strokeWidth={1.75} aria-hidden />
        <span>
          The production chatbot ships with a <b>level-wise library of ~1,000 pre-defined queries</b> across sections; this prototype demonstrates the interaction.
        </span>
      </div>
    </>
  );
}
