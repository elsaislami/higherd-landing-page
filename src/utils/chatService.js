const CHAT_API_URL = 'https://assistant.higherd.de/api/chat';

/**
 * Send a message to the Higherd AI assistant
 * @param {string} message - The user's message
 * @param {string} threadId - Optional thread ID for conversation continuity
 * @returns {Promise<{reply: string, thread_id: string, timestamp: string}>}
 */
export const sendChatMessage = async (message, threadId = '') => {
  try {
    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
        thread_id: threadId || '',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      if (response.status === 429) {
        throw new Error('Too many requests. Please wait a moment and try again.');
      }
      
      if (response.status === 504) {
        throw new Error('Request timeout. The assistant is taking too long to respond.');
      }
      
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.reply) {
      throw new Error('Invalid response from server');
    }
    
    return data;
  } catch (error) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('Unable to connect to the assistant. Please check your internet connection.');
    }
    throw error;
  }
};

/**
 * Check if the chat service is available
 * @returns {Promise<boolean>}
 */
export const checkChatServiceHealth = async () => {
  try {
    const response = await fetch('https://assistant.higherd.de/health', {
      method: 'GET',
    });
    return response.ok;
  } catch (error) {
    console.error('Chat service health check failed:', error);
    return false;
  }
};
