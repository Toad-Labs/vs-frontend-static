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
          if (firstDate > secondDate) {
            return -1;
          }
          if (firstDate < secondDate) {
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
  initializeChatMessages({ dispatch, commit }) {
    let directLineMessageRecievedHandler = (
      conversationId,
      userName,
      message
    ) => {
      commit("addMessageToConversation", {
        id: conversationId,
        isUser: "userName" === userName,
        text: message,
      });
    };

    const conversationId = ChatMessageService.initConnection(
      directLineMessageRecievedHandler,
      "userName"
    );
    const botChatMessage = {
      id: conversationId,
      senderName: "Virtual Concierge",
      senderIcon: "VC",
      senderIconAltText: "Virtual Concierge icon",
      lastRead: new Date(),
      messages: [],
    };
    commit("addChatConversation", botChatMessage);
  },

  // Fetch and load the categories
  async fetchChatMessages({ commit, state, getters }) {
    // Get all of the Chat Messages from the API
    const conversation = await ChatMessageService.getAll();
    // console.log(conversation);
    commit("setChatConversation", conversation);
  },

  async sendMessage({ commit }, payload) {
    // make await api call here with the text
    await ChatMessageService.sendMessage(payload.msg, payload.username);
  },
};

// mutations
const mutations = {
  addMessageToConversation(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatConversation.find((chat) => chat.id === 1);
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
