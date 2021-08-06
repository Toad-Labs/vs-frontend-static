const getters = {
  getSelectedInboxItem() {
    return 1;
  },
};

const actions = {
  closeInboxItem: jest.fn(),
  selectDefaultInboxItem: jest.fn(),
};

export default {
  namespaced: true,
  getters,
  actions,
};
