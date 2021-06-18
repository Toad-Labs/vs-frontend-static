import ChatMessageService from "../../services/chatMessages/chatMessages";

const state = {
  chatMessages: [],
};

// getters
const getters = {
  // Get virtual concierge items
  getChatMessagesOrderedByDate(state) {
    // state[0] will change to the selected inbox item
    if (state.chatMessages.length !== 0) {
      const conversation = [...state.chatMessages[0].messages].sort((a, b) => {
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
      return conversation;
    }
    return null;
  },
  getChatMessageObject(state) {
    // state[0] will change to the selected inbox item
    return state.chatMessages[0];
  },
};

// actions
const actions = {
  initializeChatMessages({ dispatch }) {
    dispatch("fetchChatMessages");
  },

  // Fetch and load the categories
  async fetchChatMessages({ commit, state, getters }) {
    // Get all of the Chat Messages from the API
    await ChatMessageService.getAll().then((chatMessages) => {
      commit("setChatMessages", chatMessages);
    });
  },

  async sendMessage(context, payload) {
    // make await api call here with the text
    context.commit("addChatbotMessage", payload);
  },
};

// mutations
const mutations = {
  addChatbotMessage(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatMessages.find(
      (chat) => chat.chatId === payload.chatId
    );
    // Find the next message id.
    const nextMessageId =
      Math.max(...conversation.messages.map((msg) => msg.chatMessageId)) + 1;
    // Create the new message object.
    const newMessage = {
      chatMessageId: nextMessageId,
      receivedTime: "August 30, 2021 23:15:30",
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
