const getters = {
  getSelectedInboxItem() {
    return 1;
  },
};

const actions = {
  closeInboxItem: jest.fn(),
};

export default {
  namespaced: true,
  getters,
  actions,
};
