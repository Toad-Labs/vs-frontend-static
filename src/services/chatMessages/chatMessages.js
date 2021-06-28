import { DirectLine } from "botframework-directlinejs";

/**
 * Initializes chat bot conversation.
 * @param messageRecievedHandler Overwrites the directLineMessageRecievedHandler function with parameters: userName and message.
 * @param userName user name sending the message.
 */

const initConnection = (userName) => {
  return new Promise((resolve, reject) => {
    directLine = new DirectLine({
      secret: "yUFfstW-qB4.-5pEc2KNRFxKZt4sbzLnvMAn4NWok31MfECCT6lMMX0",
    });
    try {
      sendMessage("Initialize", userName);
    } catch (e) {
      reject(e);
    }
    directLine.activity$.subscribe((activity) => {
      resolve({ user: activity.from.name, text: activity.text });
    });
  });
};

let directLine;

const sendMessage = (msg, userName) => {
  directLine
    .postActivity({
      // "from" is when the app support user accounts
      from: { id: "UserId", name: userName }, // (from.name is optional)
      type: "message",
      text: msg,
    })
    .subscribe(
      (id) => console.log("SEND ID Posted activity, assigned ID ", id),
      (error) => {
        throw error;
      }
    );
};

// const receiveMessageHandler = (messageRecievedHandler) => {
//   directLine.activity$.subscribe((activity) => {
//     messageRecievedHandler(activity.from.name, activity.text);
//   });
// };

const connectionErrorHandler = (err) => {
  console.log(err);
};

const ChatMessagesService = {
  sendMessage,
  initConnection,
};

export default ChatMessagesService;
