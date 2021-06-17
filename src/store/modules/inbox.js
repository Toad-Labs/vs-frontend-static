// Don't mind this import. I will use it in my next PR.
// import InboxService from '../../services/inbox/inbox';

const state = {
  selectedInboxItemIndex: 0,
  // other inbox state values
};

// getters
const getters = {
  getInboxItems(state) {
    let inboxItems = [
      {
        id: 5,
        senderIcon: "./src/assets/UserAccount/VirtualConcierge.svg",
        senderName: "Virtual Concierge",
        teaserText: "Hi, how can I help you?",
        dayRead: "",
        selected: false,
      },
      {
        id: 100,
        senderIcon: "./src/assets/UserAccount/VirtualConcierge.svg",
        senderName: "Job Bank",
        teaserText:
          "You are receiving this email because you recently completed an application for Employment Insurance.",
        dayRead: "Weds",
        selected: false,
      },
    ];

    let selectedItem = inboxItems.find(
      (inboxItem) => inboxItem.id === state.selectedInboxItemIndex
    );
    if (selectedItem) selectedItem.selected = true;

    return inboxItems;
  },
};

// actions
const actions = {
  async selectInboxItem(context, index) {
    context.commit("updateSelectedInboxItemIndex", index);
  },
};

// mutations
const mutations = {
  updateSelectedInboxItemIndex(state, index) {
    state.selectedInboxItemIndex = index;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
