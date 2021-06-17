// Don't mind this import. I will use it in my next PR.
// import InboxService from '../../services/inbox/inbox';

const state = {
  selectedInboxItemId: 0,
};

// getters
const getters = {
  getInboxItems(state) {
    let inboxItems = [
      {
        id: 5,
        senderIcon: "VC",
        senderName: "Virtual Concierge",
        teaserText: "Hi, how can I help you?",
        dayRead: "",
        selected: false,
      },
      {
        id: 100,
        senderIcon: "Mail",
        senderName: "Job Bank",
        teaserText:
          "You are receiving this email because you recently completed an application for Employment Insurance.",
        dayRead: "Weds",
        selected: false,
      },
    ];

    let selectedItem = inboxItems.find(
      (inboxItem) => inboxItem.id === state.selectedInboxItemId
    );
    if (selectedItem) selectedItem.selected = true;

    return inboxItems;
  },
};

// actions
const actions = {
  async selectInboxItem(context, id) {
    context.commit("updateSelectedInboxItemId", id);
  },
};

// mutations
const mutations = {
  updateSelectedInboxItemId(state, id) {
    state.selectedInboxItemId = id;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
