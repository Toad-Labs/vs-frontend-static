import { DirectLine } from "botframework-directlinejs";

/**
 * Initializes chat bot conversation.
 * @param messageRecievedHandler Overwrites the directLineMessageRecievedHandler function with parameters: userName and messagetext.
 * @param userName user name sending the message.
 */

const initConnection = (messageRecievedHandler, userName) => {
  return new Promise((resolve, reject) => {
    if (messageRecievedHandler)
      directLineMessageRecievedHandler = messageRecievedHandler;
    directLine = new DirectLine({
      secret: "yUFfstW-qB4.-5pEc2KNRFxKZt4sbzLnvMAn4NWok31MfECCT6lMMX0",
    });
    receiveMessageHandler();
    sendMessage("Initialize", userName)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let directLine;
//directLineMessageRecievedHandler can be Overwritten with a function to handle directLine responses
let directLineMessageRecievedHandler = (userName, messageText) => {
  console.log(
    "Overwrite directLineMessageRecievedHandler to capture messages returned"
  );
};

const sendMessage = (msg, userName) => {
  return new Promise((resolve, reject) => {
    directLine
      .postActivity({
        // "from" is when the app support user accounts (authentication)
        from: { id: "UserId", name: userName }, // (from.name is optional)
        type: "message",
        text: msg,
      })
      .subscribe(
        (id) => resolve(id),
        (error) => reject(error)
      );
  });
};

const receiveMessageHandler = () => {
  directLine.activity$.subscribe(
    (activity) => {
      // If messages need their own id, pass activity.id as a parameter in the function below.
      directLineMessageRecievedHandler(
        activity.from.name,
        activity.text,
        activity.conversation.id
      );
    },
    (err) => console.log(err)
  );
};

const ChatMessagesService = {
  sendMessage,
  initConnection,
};

export default ChatMessagesService;
