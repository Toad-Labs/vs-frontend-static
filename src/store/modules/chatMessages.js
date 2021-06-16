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
        receivedTime: new Date("August 11, 1975 23:15:30"),
        isUser: false,
        text: "Hi, how can I help you?",
      },
      {
        chatMessageId: 2,
        receivedTime: new Date("August 13, 1975 23:15:30"),
        isUser: true,
        text: "I need help! My desk is on fire!",
      },
      {
        chatMessageId: 3,
        receivedTime: new Date("August 15, 1975 23:15:30"),
        isUser: false,
        text: "I appreciate your concern. Apply water vigorously and call 911.",
      },
      {
        chatMessageId: 4,
        receivedTime: new Date("August 17, 1975 23:15:30"),
        isUser: true,
        text: "I meant I am working too hard; I am all fired up right now.",
      },
      {
        chatMessageId: 5,
        receivedTime: new Date("August 19, 1975 23:15:30"),
        isUser: false,
        text: "Oh... Well, this is akward.",
      },
      {
        chatMessageId: 6,
        receivedTime: new Date("August 20, 1975 23:15:30"),
        isUser: false,
        text: "Hi, how can I help you?",
      },
      {
        chatMessageId: 7,
        receivedTime: new Date("August 22, 1975 23:15:30"),
        isUser: true,
        text: "I need help! My desk is on fire!",
      },
      {
        chatMessageId: 8,
        receivedTime: new Date("August 23, 1975 23:15:30"),
        isUser: false,
        text: "I appreciate your concern. Apply water vigorously and call 911.",
      },
      {
        chatMessageId: 9,
        receivedTime: new Date("August 25, 1975 23:15:30"),
        isUser: true,
        text: "I meant I am working too hard; I am all fired up right now.",
      },
      {
        chatMessageId: 10,
        receivedTime: new Date("August 27, 1975 23:15:30"),
        isUser: false,
        text: "Oh... Well, this is akward.",
      },
    ],
  },
];

// getters
const getters = {
  // Get virtual concierge items
  getChatMessagesOrderedByDate(state) {
    // state[0] will change to the selected inbox item
    const conversation = [...state[0].messages].sort((a, b) => {
      if (a.receivedTime > b.receivedTime) {
        return -1;
      }
      if (a.receivedTime < b.receivedTime) {
        return 1;
      }
      return 0;
    });
    return conversation;
  },
  getChatMessageObject(state) {
    // state[0] will change to the selected inbox item
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
      receivedTime: new Date(),
      isUser: payload.isUser,
      text: payload.text,
    };
    // Add the new message to the correct conversation.
    conversation.messages.push(newMessage);
  },

  setChatMessages(payload) {
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
