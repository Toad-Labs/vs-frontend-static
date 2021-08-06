const initConnection = async (messageRecievedHandler, userName) => {
  const mockedId = 1337;
  return mockedId;
};

const sendMessage = async (msg, userName, lang) => {
  const mockedSuccessMessage = "success response message mocked";
  return mockedSuccessMessage;
};

const ChatMessagesService = {
  sendMessage,
  initConnection,
};

export default ChatMessagesService;
