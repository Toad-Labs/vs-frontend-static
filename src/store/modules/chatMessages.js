import ChatMessageService from "../../services/chatMessages/chatMessages";

const state = {
  chatMessages: [],
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
    return state.chatMessages;
  },
  getChatMessageById: (state, getters) => (id) =>
    state.chatMessages.find((chatMessage) => chatMessage.id === id),
};

// actions
const actions = {
  initializeChatMessages({ dispatch }) {
    dispatch("fetchChatMessages");
  },

  // Fetch and load the categories
  async fetchChatMessages({ commit, state, getters, dispatch }) {
    // Get all of the Chat Messages from the API
    await ChatMessageService.getAll().then((chatMessages) => {
      commit("setChatMessages", chatMessages);
      if (chatMessages[0])
        this.dispatch("inbox/selectDefaultInboxItem", chatMessages[0].id);
    });
  },

  async sendMessage({ commit, rootGetters }, payload) {
    // make await api call here with the text
    commit("addChatbotMessage", payload);

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
  addChatbotMessage(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatMessages.find(
      (chat) => chat.id === payload.id
    );
    // Find the next message id.
    const nextMessageId =
      Math.max(...conversation.messages.map((msg) => msg.id)) + 1;
    // Create the new message object.
    const newMessage = {
      id: nextMessageId,
      receivedTime: Date.now(),
      isUser: payload.isUser,
      text: payload.text,
    };
    // Add the new message to the correct conversation.
    conversation.messages.push(newMessage);
  },

  setChatMessages(state, payload) {
    if (payload) {
      state.chatMessages = payload;
    }
  },

  setLastRead(state, id) {
    const conversation = state.chatMessages.find((chat) => chat.id === id);
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
