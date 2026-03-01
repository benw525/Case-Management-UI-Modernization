import React, { useEffect, useState, useRef } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
}
const STARTER_CHIPS = [
'Case Strategy',
'Draft Message',
'Suggest Tasks',
'Explain Feature'];

export function AdvocateAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: "Hello! I'm Advocate AI, your legal assistant. I can help with case strategy, draft communications, suggest tasks, and answer questions about your cases. How can I help you today?",
    sender: 'ai'
  }]
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);
  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
      // Small delay to allow animation to complete
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);
  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);
  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    // Add user message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user'
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm a local preview of Advocate AI. In the full version, I would analyze your case data and provide a detailed, context-aware response to your request.",
        sender: 'ai'
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="fixed bottom-6 right-6 z-[45] flex flex-col items-end">
      {/* Chat Panel */}
      {isOpen &&
      <div className="mb-4 w-96 h-[500px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-200 origin-bottom-right">
          {/* Header */}
          <div className="bg-indigo-600 dark:bg-indigo-500 p-4 flex items-start justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl shadow-inner">
                🤖
              </div>
              <div>
                <h3 className="font-semibold text-white flex items-center gap-1.5">
                  Advocate AI
                  <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
                </h3>
                <p className="text-indigo-100 text-xs">
                  Your AI-powered legal assistant
                </p>
              </div>
            </div>
            <button
            onClick={() => setIsOpen(false)}
            className="text-indigo-100 hover:text-white hover:bg-white/10 p-1 rounded-md transition-colors"
            aria-label="Close chat">

              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
            {messages.map((msg) =>
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>

                <div
              className={`max-w-[85%] p-3 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl rounded-tr-sm' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-2xl rounded-tl-sm'}`}>

                  {msg.text}
                </div>
              </div>
          )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shrink-0">
            {/* Starter Chips */}
            <div className="flex flex-wrap gap-2 mb-3">
              {STARTER_CHIPS.map((chip) =>
            <button
              key={chip}
              onClick={() => handleSend(chip)}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">

                  {chip}
                </button>
            )}
            </div>

            {/* Input Field */}
            <div className="flex items-center gap-2">
              <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Advocate AI..."
              className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" />

              <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="w-9 h-9 shrink-0 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              aria-label="Send message">

                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      }

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Advocate AI' : 'Open Advocate AI assistant'}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 ${isOpen ? 'bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 rotate-90' : 'bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:ring-4 ring-indigo-600/20 dark:ring-indigo-500/20'}`}>

        {/* Pulse effect on first render to draw attention */}
        {!hasOpened && !isOpen &&
        <span className="absolute inset-0 rounded-full border-2 border-indigo-400 dark:border-indigo-300 animate-ping opacity-75"></span>
        }

        {isOpen ?
        <X className="w-6 h-6 transition-transform duration-300 -rotate-90" /> :

        <Bot className="w-6 h-6 transition-transform duration-300" />
        }
      </button>
    </div>);

}