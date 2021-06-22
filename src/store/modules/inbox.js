// Don't mind this import. I will use it in my next PR.
// import InboxService from '../../services/inbox/inbox';

const state = {
  selectedInboxItemId: 0,
  mobileDrawerOpen: false,
};

// getters
const getters = {
  getInboxItems(state, getters, rootState, rootGetters) {
    let inboxItems = [];

    rootGetters["chatMessages/getAllChatMessages"].forEach((item) => {
      inboxItems.push({
        id: item.id,
        senderIcon: item.senderIcon,
        senderName: item.senderName,
        teaserText: "Hi Mary, I'm your Virtual Concierge",
        dayRead: "tues",
        selected: false,
        type: "chat",
      });
    });

    rootGetters["emails/getMailObject"].forEach((item) => {
      inboxItems.push({
        id: item.id,
        senderIcon: item.senderIcon,
        senderName: item.senderName,
        teaserText: "Your Employment Insurance",
        dayRead: "wed",
        selected: false,
        type: "email",
      });
    });

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
