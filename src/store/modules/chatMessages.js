import ChatMessageService from "../../services/chatMessages/chatMessages";

const state = {
  chatConversation: [],
};

// getters
const getters = {
  // Get virtual concierge items
  getChatMessageByIdOrderedByMessagesDate: (state, getters) => (id) => {
    let cm = { ...getters.getChatMessageById(id) };
    if (cm != undefined) {
      if (cm.messages.length !== 0) {
        cm.messages = [...cm.messages].sort((a, b) => {
          const firstDate = new Date(a.receivedTime).getTime();
          const secondDate = new Date(b.receivedTime).getTime();
          if (firstDate < secondDate) {
            return -1;
          }
          if (firstDate > secondDate) {
            return 1;
          }
          return 0;
        });
      }
    }
    return cm;
  },
  getAllChatMessages(state) {
    return state.chatConversation;
  },
  getChatMessageById: (state, getters) => (id) =>
    state.chatConversation.find((chatMessage) => chatMessage.id === id),
};

// actions
const actions = {
  initializeChatMessages({ dispatch, commit, rootGetters }) {
    let directLineMessageRecievedHandler = (userName, message, convoId) => {
      if (!state.chatConversation.some((chat) => chat.id === convoId)) {
        commit("addChatConversation", {
          id: convoId,
          senderName: "Virtual Concierge",
          senderIcon: "VC",
          senderIconAltText: "Virtual Concierge icon",
          lastRead: new Date(),
          messages: [],
        });
        this.dispatch("inbox/selectDefaultInboxItem", convoId);
      }
      commit("addMessageToConversation", {
        id: convoId,
        isUser: "userName" === userName,
        text: message,
      });
      if (convoId === rootGetters["inbox/getSelectedInboxItem"].id) {
        commit("setLastRead", convoId);
      }
    };

    // Init call
    // Add .then() if needed.
    ChatMessageService.initConnection(
      directLineMessageRecievedHandler,
      "userName"
    ).catch((err) => {
      commit("addChatConversation", {
        id: 1,
        senderName: "Virtual Concierge",
        senderIcon: "VC",
        senderIconAltText: "Virtual Concierge icon",
        lastRead: new Date(),
        messages: [
          {
            receivedTime: Date.now(),
            isUser: false,
            text: err.message.charAt(0).toUpperCase() + err.message.slice(1),
          },
        ],
      });
    });
  },

  async sendChatMessage({ commit, rootGetters }, payload) {
    // make await api call here with the text
    //TODO: get username
    ChatMessageService.sendMessage(payload.message, "userName")
      .then((res) => {
        console.log("sending message response: ", res);
      })
      .catch((err) => {
        console.log("ERROR sending message: ", err.message);
      });

    //When adding a message setLastRead date to include it

    if (payload.id === rootGetters["inbox/getSelectedInboxItem"].id) {
      commit("setLastRead", payload.id);
    }
  },

  async markChatRead(context, id) {
    context.commit("setLastRead", id);
  },
};

// mutations
const mutations = {
  addMessageToConversation(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatConversation.find(
      (chat) => chat.id === payload.id
    );
    // Find the next message id.
    // const nextMessageId =
    //   Math.max(...conversation.messages.map((msg) => msg.id)) + 1;
    // Create the new message object.
    const newMessage = {
      receivedTime: Date.now(),
      isUser: payload.isUser,
      text: payload.text,
    };
    // Add the new message to the correct conversation.
    conversation.messages.push(newMessage);
    if (payload.markRead) setLastRead(payload.id);
  },

  setChatConversation(state, payload) {
    if (payload) {
      state.chatConversation = payload;
    }
  },

  addChatConversation(state, payload) {
    state.chatConversation.push({
      id: payload.id,
      senderName: payload.senderName,
      senderIcon: payload.senderIcon,
      senderIconAltText: payload.senderIconAltText,
      lastRead: payload.lastRead,
      messages: payload.messages,
    });
  },
  // setChatConversationId(state, payload){
  //   const conversation = state.chatConversation.find(
  //     (chat) => chat.id === payload.id
  //   );
  //   if (payload.newId)
  //     conversation.id = payload.newId;
  // },
  setLastRead(state, id) {
    const conversation = state.chatConversation.find((chat) => chat.id === id);
    conversation.lastRead = Date.now();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
