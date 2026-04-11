import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat, QUICK_PROMPTS } from '@shared/hooks/useChat';

function renderContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-copper-600">
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
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] transition-all duration-500 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div role="dialog" aria-label="Chat with SYSCOM assistant" className="bg-warm-50/95 backdrop-blur-xl border border-copper-500/15 shadow-2xl shadow-charcoal-900/10 rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-copper-500/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-copper-500 to-copper-600 flex items-center justify-center">
                <MessageCircle size={14} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-charcoal-900">
                  SYSCOM
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
                  <p className="text-[9px] uppercase tracking-[0.15em] text-charcoal-500">
                    Online
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-charcoal-400 hover:text-charcoal-900 transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed rounded-xl ${
                    msg.role === 'user'
                      ? 'bg-copper-500/15 border border-copper-500/20 text-charcoal-900'
                      : 'bg-warm-200 border border-warm-400 text-charcoal-800'
                  }`}
                >
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-warm-200 border border-warm-400 px-4 py-3 flex gap-1.5 rounded-xl">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length <= 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-warm-200 border border-copper-500/15 text-charcoal-500 hover:text-charcoal-900 hover:border-copper-500/30 transition-all duration-300"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-copper-500/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-warm-200 border border-warm-400 text-charcoal-900 placeholder-charcoal-400 text-sm px-4 py-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-copper-500/50 focus:border-copper-500/30 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="text-copper-500 hover:text-copper-600 disabled:text-charcoal-300 transition-colors p-2"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-warm-50 border border-copper-500/25 shadow-lg shadow-charcoal-900/10 hover:border-copper-500/50 hover:shadow-copper-500/15 transition-all duration-500 group`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={20} className="text-copper-500" />
        ) : (
          <MessageCircle
            size={20}
            className="text-copper-500 group-hover:text-copper-600 transition-colors"
          />
        )}
      </button>
    </>
  );
}
