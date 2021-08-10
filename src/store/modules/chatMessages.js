import ChatMessageService from "../../services/chatMessages/chatMessages";
import { i18n } from "./../../../i18n";

const state = {
  chatConversation: [],
  loaded: false,
};

// getters
const getters = {
  // Get virtual Assistant items
  getChatMessageByIdOrderedByMessagesDate: (state, getters) => (id) => {
    let cm = { ...getters.getChatMessageById(id) };
    if (cm != undefined) {
      if (cm.messages.length !== 0) {
        cm.messages = [...cm.messages].sort((a, b) => {
          const firstDate = new Date(a.receivedTime).getTime();
          const secondDate = new Date(b.receivedTime).getTime();
          if (firstDate > secondDate) {
            return 1;
          }
          if (firstDate < secondDate) {
            return -1;
          }
          return 0;
        });
      }
    }
    return cm;
  },
  getAllChatMessages(state) {
    return state.chatConversation;
  },
  getChatMessageById: (state) => (id) =>
    state.chatConversation.find((chatMessage) => chatMessage.id === id),
  isLoaded(state) {
    return state.loaded;
  },
};

// actions
const actions = {
  initializeChatMessages({ dispatch, commit, rootGetters }) {
    commit("setDefaultState");
    let directLineMessageRecievedHandler = (
      userName,
      message,
      convoId,
      suggestedActions
    ) => {
      commit("addMessageToConversation", {
        id: convoId,
        isUser: "userName" === userName,
        text: message,
        suggestedActions: suggestedActions,
      });
      if (convoId === rootGetters["inbox/getSelectedInboxItem"].id) {
        commit("setLastRead", convoId);
      }
    };

    const senderName =
      i18n.global.locale.value === "fr"
        ? "Assistant virtuel"
        : "Virtual Assistant";
    const senderIconAltText =
      i18n.global.locale.value === "fr"
        ? "Assistant virtuel icon"
        : "Virtual Assistant icon";

    // Init call
    // Add .then() if needed.
    ChatMessageService.initConnection(
      directLineMessageRecievedHandler,
      "userName"
    )
      .then((conversationId) => {
        commit("addChatConversation", {
          id: conversationId,
          senderName: senderName,
          senderIcon: "VA",
          senderIconAltText: senderIconAltText,
          lastRead: new Date(),
          messages: [],
        });
        this.dispatch("inbox/selectDefaultInboxItem", conversationId);
      })
      .catch((err) => {
        commit("addChatConversation", {
          id: 1,
          senderName: senderName,
          senderIcon: "VA",
          senderIconAltText: senderIconAltText,
          lastRead: new Date(),
          messages: [
            {
              receivedTime: Date.now(),
              isUser: false,
              text: err.message.charAt(0).toUpperCase() + err.message.slice(1),
            },
          ],
        });
      });
    commit("setLoaded");
  },

  async sendChatMessage({ commit, rootGetters }, payload) {
    // make await api call here with the text
    //TODO: get username
    ChatMessageService.sendMessage(
      payload.message,
      "userName",
      i18n.global.locale.value
    )
      .then((res) => {
        console.log("sending message response: ", res);
      })
      .catch((err) => {
        console.log("ERROR sending message: ", err.message);
      });

    //When adding a message setLastRead date to include it

    if (payload.id === rootGetters["inbox/getSelectedInboxItem"].id) {
      commit("setLastRead", payload.id);
    }
  },

  async markChatRead(context, id) {
    context.commit("setLastRead", id);
  },
};

// mutations
const mutations = {
  //reset state to it's initial values
  setDefaultState(state) {
    state.chatConversation = [];
    state.loaded = false;
  },
  addMessageToConversation(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatConversation.find(
      (chat) => chat.id === payload.id
    );
    // Create the new message object.
    const newMessage = {
      receivedTime: Date.now(),
      isUser: payload.isUser,
      text: payload.text,
      suggestedActions: payload.suggestedActions,
    };
    // Add the new message to the correct conversation.
    conversation.messages.push(newMessage);
    if (payload.markRead) setLastRead(payload.id);
  },

  setChatConversation(state, payload) {
    if (payload) {
      state.chatConversation = payload;
    }
  },

  addChatConversation(state, payload) {
    state.chatConversation.push({
      id: payload.id,
      senderName: payload.senderName,
      senderIcon: payload.senderIcon,
      senderIconAltText: payload.senderIconAltText,
      lastRead: payload.lastRead,
      messages: payload.messages,
    });
  },

  setLastRead(state, id) {
    const conversation = state.chatConversation.find((chat) => chat.id === id);
    conversation.lastRead = Date.now();
  },
  setLoaded(state) {
    state.loaded = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
