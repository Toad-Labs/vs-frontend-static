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
      //get last message for teaser Text
      const messagesList = item.messages.sort(function (a, b) {
        return new Date(a.receivedTime) - new Date(b.receivedTime);
      });
      const lastMessage = messagesList[messagesList.length - 1];

      //dayRead will be unread if no value provided. The design currently accounts for only the weekday to be displayed
      let dayRead = undefined;
      if (
        item.lastRead != null &&
        lastMessage &&
        new Date(item.lastRead) >= new Date(lastMessage.receivedTime)
      ) {
        dayRead = new Date(lastMessage.receivedTime).toLocaleDateString("En", {
          weekday: "short",
        });
      }

      inboxItems.push({
        id: item.id,
        senderIcon: item.senderIcon,
        senderName: item.senderName,
        teaserText: lastMessage?.text,
        dayRead: dayRead,
        selected: false,
        type: "chat",
      });
    });

    rootGetters["emails/getMailObject"].forEach((item) => {
      //get last message for teaser Text
      const emailsList = item.emails.sort(function (a, b) {
        return new Date(a.receivedTime) - new Date(b.receivedTime);
      });
      const lastEmail = emailsList[emailsList.length - 1];

      //dayRead will be unread if no value provided. The design currently accounts for only the weekday to be displayed
      let dayRead = undefined;
      if (
        item.lastRead != null &&
        new Date(item.lastRead) >= new Date(lastEmail.receivedTime)
      ) {
        dayRead = new Date(lastEmail.receivedTime).toLocaleDateString("En", {
          weekday: "short",
        });
      }

      inboxItems.push({
        id: item.id,
        senderIcon: item.senderIcon,
        senderName: item.senderName,
        teaserText: lastEmail.messageTitle,
        dayRead: dayRead,
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
  isLoaded(state, getters, rootState, rootGetters) {
    const chatMessagesLoaded = rootState.chatMessages.loaded;
    const emailsLoaded = rootState.emails.loaded;
    return chatMessagesLoaded && emailsLoaded;
  },
};

// actions
const actions = {
  async selectDefaultInboxItem(context, id) {
    context.commit("updateSelectedInboxItemId", id);
  },
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
