// Don't mind this import. I will use it in my next PR.
// import ChatMessageService from '../../services/ChatMessage/ChatMessage';

const state = [
  {
    chatId: 1,
    senderName: "Virtual Concierge",
    senderIcon: "logo.png",
    messages: [
      {
        chatMessageId: 1,
        receivedTime: Date.now(),
        isUser: false,
        text: "Oh... Well, this is akward.",
      },
      {
        chatMessageId: 2,
        receivedTime: Date.now(),
        isUser: true,
        text: "I meant I am working too hard; I am all fired up right now.",
      },
      {
        chatMessageId: 3,
        receivedTime: Date.now(),
        isUser: false,
        text: "I appreciate your concern. Apply water vigorously and call 911.",
      },
      {
        chatMessageId: 4,
        receivedTime: Date.now(),
        isUser: true,
        text: "I need help! My desk is on fire!",
      },
      {
        chatMessageId: 5,
        receivedTime: Date.now(),
        isUser: false,
        text: "Hi, how can I help you?",
      },
      {
        chatMessageId: 6,
        receivedTime: Date.now(),
        isUser: false,
        text: "Oh... Well, this is akward.",
      },
      {
        chatMessageId: 7,
        receivedTime: Date.now(),
        isUser: true,
        text: "I meant I am working too hard; I am all fired up right now.",
      },
      {
        chatMessageId: 8,
        receivedTime: Date.now(),
        isUser: false,
        text: "I appreciate your concern. Apply water vigorously and call 911.",
      },
      {
        chatMessageId: 9,
        receivedTime: Date.now(),
        isUser: true,
        text: "I need help! My desk is on fire!",
      },
      {
        chatMessageId: 10,
        receivedTime: Date.now(),
        isUser: false,
        text: "Hi, how can I help you?",
      },
    ],
  },
];

// getters
const getters = {
  // Get virtual concierge items
  getChatMessage(state) {
    return state[0];
  },
};

// actions
const actions = {
  // Don't mind this commented section. It will be used with the ChatMessageService.

  //   initializechatMessages ({ dispatch }) {

  //     dispatch('fetchChatMessages');

  //   },

  //   // Fetch and load the categories
  //   fetchChatMessages ({ commit, state, getters }) {

  //      // Get all of the Chat Messages from the API
  //      ChatMessageService
  //      .getAll()
  //      .then((ChatMessages) => {

  //       commit('setChatMessages', ChatMessages);

  //     //   commit('setLoadedState', true);

  //      });

  //   },

  async sendMessage(context, payload) {
    // make await api call here with the text
    context.commit("addChatbotMessage", payload);
  },
};

// mutations
const mutations = {
  addChatbotMessage(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.find((chat) => chat.chatId === payload.chatId);
    // Find the next message id.
    const nextMessageId =
      Math.max(...conversation.messages.map((msg) => msg.chatMessageId)) + 1;
    // Create the new message object.
    const newMessage = {
      chatMessageId: nextMessageId,
      receivedTime: Date.now(),
      isUser: payload.isUser,
      text: payload.text,
    };
    // Find index of the chat in the state.
    const index = state.findIndex((chat) => chat.chatId === payload.chatId);
    // Add the new message to the correct conversation.
    state[index].messages.unshift(newMessage); // need to find the index
  },

  setChatMessages(state, payload) {
    state = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
