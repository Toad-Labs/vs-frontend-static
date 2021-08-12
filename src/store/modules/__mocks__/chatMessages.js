const state = {
  loaded: true,
};

const getters = {
  getChatMessageByIdOrderedByMessagesDate: (state, getters) => (id) => {
    return {
      id: 1,
      messages: [
        {
          id: 1,
          receivedTime: new Date(2018, 11, 24, 10, 33, 30, 0),
          isUser: true,
          text: "test message text",
          senderIcon: "test icon",
          senderIconAltText: "test alt text",
        },
      ],
    };
  },
  getAllChatMessages(state) {
    return [
      {
        id: 1,
        messages: [
          {
            id: 1,
            receivedTime: new Date(2018, 11, 24, 10, 33, 30, 0),
            isUser: true,
            text: "test message text",
            senderIcon: "test icon",
            senderIconAltText: "test alt text",
          },
        ],
      },
    ];
  },
  isLoaded() {
    return true;
  },
};

const actions = {
  markChatRead(context, id) {
    jest.fn();
  },
  sendChatMessage({ commit, rootGetters }, payload) {
    jest.fn();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
};
