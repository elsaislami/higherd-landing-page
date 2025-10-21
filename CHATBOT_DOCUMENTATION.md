# Higherd Chatbot Integration

## Overview
The Higherd chatbot is a floating AI assistant widget that allows users to ask questions about Higherd's services, features, and platform directly from the website.

## Features
- 🤖 **AI-Powered Responses**: Connects to OpenAI Assistant API for intelligent answers
- 💬 **Conversational Context**: Maintains thread continuity across messages
- 🌍 **Multilingual**: Supports English and German translations
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Feedback**: Shows typing indicators and message timestamps
- 🎨 **Modern UI**: Clean, professional design matching Higherd branding
- 🔒 **Rate Limited**: Protected against abuse with 10 requests/minute limit

## Components

### ChatBot Component (`src/components/ChatBot.jsx`)
Main chatbot widget with:
- Floating button toggle
- Chat window with message history
- Input field with character limit (10,000)
- Loading states and error handling
- Thread ID management for conversation continuity

### Chat Service (`src/utils/chatService.js`)
API utility functions:
- `sendChatMessage(message, threadId)`: Sends message to assistant
- `checkChatServiceHealth()`: Checks if backend is available

### Icons (`src/assets/icons/`)
- `ChatIcon.jsx`: Chat bubble icon
- `SendIcon.jsx`: Send message icon
- `CloseIcon.jsx`: Close/cancel icon

## API Integration

### Backend Server
- **URL**: `http://assistant.higherd.de/api/chat`
- **Method**: POST
- **Headers**: `Content-Type: application/json`

### Request Format
```json
{
  "message": "Your question here",
  "thread_id": "thread_xxx" // Optional, empty string for new conversation
}
```

### Response Format
```json
{
  "reply": "Assistant's response",
  "thread_id": "thread_xxx",
  "timestamp": "2025-10-21T12:54:34.223Z"
}
```

### Error Handling
- **429**: Rate limit exceeded (10 requests/minute)
- **504**: Request timeout (60 second limit)
- **500**: Server error
- Network errors: Connection issues

## Usage

The chatbot is automatically available on all pages. Users can:
1. Click the floating chat button (bottom-right corner)
2. Type their question in the input field
3. Press Enter or click Send
4. View the AI assistant's response
5. Continue the conversation (context is maintained)

## Translations

Chatbot strings are available in:
- **English** (`src/i18n/locales/en/common.json`)
- **German** (`src/i18n/locales/de/common.json`)

Translation keys:
- `chatbot.welcome`: Initial greeting message
- `chatbot.placeholder`: Input placeholder text
- `chatbot.typing`: Typing indicator
- `chatbot.online`: Status indicator
- `chatbot.error`: Generic error message

## Styling

The chatbot uses Tailwind CSS with:
- Responsive breakpoints (`sm:`, `md:`)
- Custom animations (bounce, slide-in)
- Blue gradient theme matching Higherd brand
- High z-index (9999) to appear above all content

## Future Enhancements

Potential improvements:
- [ ] Persistent chat history (localStorage)
- [ ] File/image upload support
- [ ] Voice input capability
- [ ] Suggested questions/quick replies
- [ ] Chat history export
- [ ] User feedback system (thumbs up/down)
- [ ] Admin dashboard for analytics
- [ ] Multi-assistant support (different experts)

## Testing

To test the chatbot locally:

1. Ensure the backend server is running at `http://assistant.higherd.de`
2. Start the development server: `npm run dev`
3. Click the chat button
4. Send test messages like:
   - "What is Higherd?"
   - "How does the matching algorithm work?"
   - "What services do you offer for companies?"

## Troubleshooting

### Chatbot doesn't appear
- Check console for errors
- Verify `ChatBot` is imported in `main.jsx`
- Clear browser cache

### Messages not sending
- Check network tab for failed requests
- Verify backend URL is correct
- Check CORS configuration on backend

### Rate limit errors
- Wait 60 seconds between request bursts
- Consider increasing limit on backend if needed

## Security Considerations

- Input is limited to 10,000 characters
- Rate limiting prevents abuse
- No sensitive data should be shared in chat
- Thread IDs are only stored in component state (not localStorage)
- CORS is configured on backend to limit origins

## Performance

- Lazy loading: Component only loads when needed
- Optimized re-renders with React hooks
- Automatic scroll to bottom on new messages
- Debounced typing indicators

## Accessibility

- Keyboard navigation support
- ARIA labels on buttons
- Focus management on open/close
- Screen reader friendly

## Backend Configuration

Required environment variables on backend:
```bash
OPENAI_API_KEY=sk-xxx
HIGHERD_ASSISTANT_ID=asst_xxx
CORS_ORIGIN=https://higherd.de
PORT=3001
```

## Deployment Notes

When deploying:
1. Update API URL if backend domain changes
2. Ensure HTTPS is enabled for production
3. Configure proper CORS origins
4. Monitor rate limits and adjust if needed
5. Set up error tracking (e.g., Sentry)

## Contact

For questions or issues with the chatbot:
- Backend: Check server logs at `assistant.higherd.de`
- Frontend: Check browser console
- API: Test with `curl` command (see main documentation)
