import request from "../api";

function getAll() {
  return request({
    url: "/data/chatMessages.json",
    method: "GET",
  })
    .then((response) => {
      let chatMessages = [];
      const conversationList = response.chatMessages;
      if (Array.isArray(conversationList) && conversationList?.length > 0) {
        conversationList.forEach((convo) => {
          // Here we can use the response adapter to create a objects of each convo.
          chatMessages.push(convo);
        });
      }
      return chatMessages;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

const ChatMessagesService = {
  getAll, //, update, delete, etc. ...
};

export default ChatMessagesService;
