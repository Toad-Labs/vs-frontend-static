// Don't mind this import. I will use it in my next PR.
// import InboxService from '../../services/inbox/inbox';

const state = {
  selectedInboxItemId: 5,
  mobileDrawerOpen: false,
};

// getters
const getters = {
  getInboxItems(state) {
    let inboxItems = [
      {
        id: 1,
        senderIcon: "VC",
        senderName: "Virtual Concierge",
        teaserText: "Hi, how can I help you?",
        dayRead: "",
        selected: false,
        type: "chat",
      },
      {
        id: 2,
        senderIcon: "Mail",
        senderName: "Job Bank",
        teaserText:
          "You are receiving this email because you recently completed an application for Employment Insurance.",
        dayRead: "Weds",
        selected: false,
        type: "email",
      },
    ];

    let selectedItem = inboxItems.find(
      (inboxItem) => inboxItem.id === state.selectedInboxItemId
    );
    if (selectedItem) selectedItem.selected = true;

    return inboxItems;
  },
  getSelectedInboxItem(state, getters) {
    const selectedItem = getters.getInboxItems.find(
      (inboxItem) => inboxItem.id === state.selectedInboxItemId
    );
    return selectedItem;
  },
  getSelectedInboxItemType(state, getters) {
    const selectedItem = getters.getSelectedInboxItem;
    if (selectedItem) return selectedItem.type;
    return undefined;
  },
  isMobileDrawerOpen(state, getters) {
    return state.mobileDrawerOpen;
  },
};

// actions
const actions = {
  async selectInboxItem(context, id) {
    context.commit("updateSelectedInboxItemId", id);
    context.commit("updateMobileDrawerOpen", true);
  },
  async closeInboxItem(context) {
    context.commit("updateMobileDrawerOpen", false);
  },
};

// mutations
const mutations = {
  updateSelectedInboxItemId(state, id) {
    state.selectedInboxItemId = id;
  },
  updateMobileDrawerOpen(state, isOpen) {
    state.mobileDrawerOpen = isOpen;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
