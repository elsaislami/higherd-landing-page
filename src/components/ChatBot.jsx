import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ChatIcon from '../assets/icons/ChatIcon';
import SendIcon from '../assets/icons/SendIcon';
import CloseIcon from '../assets/icons/CloseIcon';
import { sendChatMessage } from '../utils/chatService';

const ChatBot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat is first opened
      setMessages([
        {
          role: 'assistant',
          content: t('chatbot.welcome', 'Hi! I\'m the Higherd assistant. How can I help you today?'),
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(input.trim(), threadId);
      
      // Update thread ID for conversation continuity
      if (response.thread_id) {
        setThreadId(response.thread_id);
      }

      const assistantMessage = {
        role: 'assistant',
        content: response.reply,
        timestamp: response.timestamp,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: t('chatbot.error', 'Sorry, I encountered an error. Please try again.'),
        timestamp: new Date().toISOString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4500A8] to-purple-700 text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ChatIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Higherd Assistant</h3>
                <p className="text-xs text-blue-100">
                  {isLoading ? t('chatbot.typing', 'Typing...') : t('chatbot.online', 'Online')}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-[#4500A8] text-white rounded-br-sm'
                      : msg.isError
                      ? 'bg-red-100 text-red-800 rounded-bl-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                    {msg.content}
                  </p>
                  <span
                    className={`text-xs mt-1 block ${
                      msg.role === 'user' ? 'text-purple-100' : 'text-gray-500'
                    }`}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm border border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chatbot.placeholder', 'Type your message...')}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4500A8] focus:border-transparent text-sm"
                disabled={isLoading}
                maxLength={10000}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2.5 bg-[#4500A8] text-white rounded-xl hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[44px]"
                aria-label="Send message"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-4 sm:right-6 z-40 w-14 h-14 bg-gradient-to-r from-[#4500A8] to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </button>
    </>
  );
};

export default ChatBot;
