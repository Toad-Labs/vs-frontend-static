import { DirectLine } from "botframework-directlinejs";
import request from "../api";

const initConnection = () => {
  return new DirectLine({
    secret: "yUFfstW-qB4.-5pEc2KNRFxKZt4sbzLnvMAn4NWok31MfECCT6lMMX0",
  });
};

let directLine = initConnection();

const sendMessage = (msg) => {
  directLine
    .postActivity({
      // "from" is when the app support user accounts
      from: { id: "UserId", name: "userName" }, // (from.name is optional)
      type: "message",
      text: msg,
    })
    .subscribe(
      (id) => console.log("SEND ID Posted activity, assigned ID ", id),
      (error) => connectionErrorHandler(error)
    );
};

const receiveMessageHandler = () => {
  // Creating conversation holder
  let convo = [];
  directLine.activity$.subscribe((activity) => {
    // Finding the current conversation
    let currConvo = convo.find((c) => c.id === activity.conversation.id);
    // If the current conversation does not exist, create it.
    if (currConvo === undefined) {
      convo.push({
        id: activity.conversation.id,
        senderName: activity.from.user || "Virtual Concierge",
        senderIcon: "VC",
        senderIconAltText: "Virtual Concierge icon",
        lastRead: null,
        messages: [
          {
            id: activity.id,
            receivedTime: activity.timestamp,
            isUser: activity.from.name === "userName",
            text: activity.text,
          },
        ],
      });
    }
    // If the conversation exists, push the new message to it.
    else {
      currConvo.messages.push({
        id: activity.id,
        receivedTime: activity.timestamp,
        isUser: activity.from.name === "userName",
        text: activity.text,
      });
    }
  });
  // Return the updated conversation.
  return convo;
};

const connectionErrorHandler = (err) => {
  console.log(err);
};

function getAll() {
  let conversation = receiveMessageHandler();

  sendMessage("Fake Message");

  return conversation;

  // return request({
  //   url: "/data/chatMessages.json",
  //   method: "GET",
  // })
  //   .then((response) => {
  //     let chatMessages = [];
  //     const conversationList = response.chatMessages;
  //     if (Array.isArray(conversationList) && conversationList?.length > 0) {
  //       conversationList.forEach((convo) => {
  //         // Here we can use the response adapter to create a objects of each convo.
  //         chatMessages.push(convo);
  //       });
  //     }
  //     return chatMessages;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     return error;
  //   });
}

const ChatMessagesService = {
  getAll,
  sendMessage, //, update, delete, etc. ...
};

export default ChatMessagesService;
