import { i18n } from "./../../../i18n";

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
      let dayRead;
      const lastReadDate = item.lastRead ? new Date(item.lastRead) : null;
      const lastMessageReceivedDate = lastMessage?.receivedTime
        ? new Date(lastMessage.receivedTime)
        : null;

      if (
        lastReadDate !== null &&
        lastMessageReceivedDate !== null &&
        lastReadDate >= lastMessageReceivedDate
      ) {
        dayRead = lastMessageReceivedDate.toLocaleDateString(
          i18n.global.locale.value,
          {
            weekday: "short",
          }
        );
      } else if (lastReadDate !== null) {
        //to account for empty conversation/inbox item, so it doesn't remain always unread
        dayRead = lastReadDate.toLocaleDateString(i18n.global.locale.value, {
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
        dayRead = new Date(lastEmail.receivedTime).toLocaleDateString(
          i18n.global.locale.value,
          {
            weekday: "short",
          }
        );
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
  isLoaded(state, getters, rootState) {
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
