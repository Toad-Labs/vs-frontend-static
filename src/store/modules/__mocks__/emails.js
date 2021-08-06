const state = {
  loaded: true,
};

const getters = {
  getMailObject(state) {
    return [
      {
        emails: [
          {
            id: 2,
            messageTitle: "test title",
            messageBody: "test body",
            receivedTime: Date.now(),
          },
        ],
      },
    ];
  },
  isLoaded() {
    return true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
