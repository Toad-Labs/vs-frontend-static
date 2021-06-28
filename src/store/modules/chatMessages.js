import ChatMessageService from "../../services/chatMessages/chatMessages";

const state = {
  chatConversation: [],
};

// getters
const getters = {
  // Get virtual concierge items
  getChatMessageByIdOrderedByMessagesDate: (state, getters) => (id) => {
    let cm = { ...getters.getChatMessageById(id) };
    if (cm != undefined) {
      if (cm.messages.length !== 0) {
        cm.messages = [...cm.messages].sort((a, b) => {
          const firstDate = new Date(a.receivedTime).getTime();
          const secondDate = new Date(b.receivedTime).getTime();
          if (firstDate > secondDate) {
            return -1;
          }
          if (firstDate < secondDate) {
            return 1;
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
  getChatMessageById: (state, getters) => (id) =>
    state.chatConversation.find((chatMessage) => chatMessage.id === id),
};

// actions
const actions = {
  initializeChatMessages({ commit, rootGetters }) {
    const conversationId = "VC01";
    let directLineMessageRecievedHandler = (userName, message) => {
      commit("addMessageToConversation", {
        id: conversationId,
        isUser: "userName" === userName,
        text: message,
      });
      if (conversationId === rootGetters["inbox/getSelectedInboxItem"].id) {
        commit("setLastRead", conversationId);
      }
    };

    ChatMessageService.initConnection("userName")
      .then((res) => {
        directLineMessageRecievedHandler(res.user, res.text);
      })
      .catch((err) => {
        console.log(err);
      });

    const botChatMessage = {
      id: conversationId,
      senderName: "Virtual Concierge",
      senderIcon: "VC",
      senderIconAltText: "Virtual Concierge icon",
      lastRead: new Date(),
      messages: [],
    };
    commit("addChatConversation", botChatMessage);
    this.dispatch("inbox/selectDefaultInboxItem", conversationId);
  },

  // Fetch and load the categories
  async fetchChatMessages({ commit, state, getters, dispatch }) {
    // Get all of the Chat Messages from the API
    const conversation = await ChatMessageService.getAll();
    commit("setChatConversation", conversation);
  },

  async sendChatMessage({ commit, rootGetters }, payload) {
    // make await api call here with the text
    //TODO: get username
    ChatMessageService.sendMessage(payload.message, "userName");

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
  addMessageToConversation(state, payload) {
    // Find the conversation to use the messages of that conversation.
    const conversation = state.chatConversation.find(
      (chat) => chat.id === payload.id
    );
    // Find the next message id.
    // const nextMessageId =
    //   Math.max(...conversation.messages.map((msg) => msg.id)) + 1;
    // Create the new message object.
    const newMessage = {
      receivedTime: Date.now(),
      isUser: payload.isUser,
      text: payload.text,
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
