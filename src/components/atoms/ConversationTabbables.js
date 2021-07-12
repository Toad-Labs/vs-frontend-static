export function ConversationTabbables(_, context) {
  function returnToChatWindow() {
    context.emit("return-to-chat-window");
  }
  function nextElement(event) {
    event.target.nextElementSibling?.focus();
  }
  function prevElement(event) {
    event.target.previousElementSibling?.focus();
  }
  return { returnToChatWindow, nextElement, prevElement };
}
