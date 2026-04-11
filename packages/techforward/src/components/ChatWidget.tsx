import { useState, useRef, useEffect } from 'react';
import { useChat, QUICK_PROMPTS } from '@shared/hooks/useChat';

function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-cyan font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isTyping, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-20 right-4 sm:right-6 z-50 w-[360px] sm:w-[420px] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div
          role="dialog"
          aria-label="Chat with SYSCOM assistant"
          className="rounded-3xl overflow-hidden border border-border flex flex-col animate-chat-slide"
          style={{
            height: '560px',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 48px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
          }}
        >
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between shrink-0 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
                <span className="font-heading font-bold text-sm" style={{ color: '#ffffff' }}>S</span>
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-gray-900 tracking-tight">SYSCOM AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span className="text-[11px] text-muted">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-muted hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan to-purple rounded-br-md'
                      : 'bg-gray-50 border border-border text-gray-700 rounded-bl-md'
                  }`}
                  style={msg.role === 'user' ? { color: '#ffffff' } : undefined}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-50 border border-border rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-purple animate-bounce-dot"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-muted border border-border hover:text-cyan hover:border-cyan/30 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-border shrink-0">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-border">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about SYSCOM..."
                className="flex-1 bg-transparent text-sm text-gray-900 placeholder-muted/60 outline-none font-body"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan to-purple disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                style={{ color: '#ffffff' }}
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2L7 9M14 2l-4.5 12L7 9M14 2L2 6.5 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan to-purple shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-90 shadow-cyan/20' : 'scale-100 hover:scale-105 shadow-cyan/30'
        }`}
        style={{ boxShadow: '0 4px 24px rgba(8, 145, 178, 0.3)', color: '#ffffff' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {/* Chat icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
          }`}
        >
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Close icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          className={`absolute transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
          }`}
        >
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
