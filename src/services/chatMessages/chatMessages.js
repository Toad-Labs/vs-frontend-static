import { DirectLine } from "botframework-directlinejs";

/**
 * Initializes chat bot conversation.
 * @param messageRecievedHandler Overwrites the directLineMessageRecievedHandler function with parameters: userName and messagetext.
 * @param userName user name sending the message.
 */

const initConnection = (messageRecievedHandler, userName) => {
  if (messageRecievedHandler)
    directLineMessageRecievedHandler = messageRecievedHandler;
  directLine = new DirectLine({
    secret: "yUFfstW-qB4.-5pEc2KNRFxKZt4sbzLnvMAn4NWok31MfECCT6lMMX0",
  });
  receiveMessageHandler();
  sendMessage("Initialize", userName);
};

let directLine;
//directLineMessageRecievedHandler can be Overwritten with a function to handle directLine responses
let directLineMessageRecievedHandler = (userName, messageText) => {
  console.log(
    "Overwrite directLineMessageRecievedHandler to capture messages returned"
  );
};

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
      (error) => connectionErrorHandler(error)
    );
};

const receiveMessageHandler = () => {
  directLine.activity$.subscribe((activity) => {
    directLineMessageRecievedHandler(activity.from.name, activity.text);
  });
};

const connectionErrorHandler = (err) => {
  console.log(err);
};

const ChatMessagesService = {
  sendMessage,
  initConnection,
};

export default ChatMessagesService;
