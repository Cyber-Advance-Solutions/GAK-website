"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";
import Chatbot from "@/components/Chatbot";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

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
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#15716e] hover:bg-[#115e5c] text-white rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(10,43,42,0.15)] transition-transform hover:-translate-y-1"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
