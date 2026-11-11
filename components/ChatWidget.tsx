"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Chatbot from "@/components/Chatbot";
import { API_URL } from "@/lib/api";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  // WhatsApp link comes from the admin (Contact page > WhatsApp URL)
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    let alive = true;
    fetch(`${API_URL}/site-settings/contact`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (alive && j?.data?.whatsappUrl) setWhatsappUrl(String(j.data.whatsappUrl));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end" ref={widgetRef}>
      {isOpen && (
        <div className="mb-4 relative w-[380px] max-w-[calc(100vw-32px)] shadow-[0_22px_60px_rgba(10,43,42,0.16)] rounded-2xl origin-bottom-right transition-all">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
          <Chatbot hideNote />
        </div>
      )}
      
      {!isOpen && (
        <div className="">
          {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 mb-2 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(37,211,102,0.25)] transition-transform hover:-translate-y-1"
            aria-label="WhatsApp chat"
          >
            <FaWhatsapp size={32} />
          </a>
          ) : null}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#15716e] hover:bg-[#115e5c] text-white rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(10,43,42,0.15)] transition-transform hover:-translate-y-1"
            aria-label="Open chat"
          >
            <MessageSquare size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
