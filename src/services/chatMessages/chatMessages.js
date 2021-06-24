import { DirectLine } from "botframework-directlinejs";
import request from "../api";

var directLine = new DirectLine({
  secret:
    "yUFfstW-qB4.-5pEc2KNRFxKZt4sbzLnvMAn4NWok31MfECCT6lMMX0" /* put your Direct Line secret here */,
});

console.log(directLine);

directLine
  .postActivity({
    from: { id: "myUserId", name: "myUserName" }, // required (from.name is optional)
    type: "message",
    text: "a message for you, Rudy",
  })
  .subscribe(
    (id) => console.log("Posted activity, assigned ID ", id),
    (error) => console.log("Error posting activity", error)
  );

directLine.activity$.subscribe((activity) =>
  console.log("received activity ", activity)
);

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
