import chatMessages from "../../../src/store/modules/chatMessages";
import { createStore, useStore } from "vuex";
import chatMessagesService from "../../../src/services/chatMessages/chatMessages";
jest.mock("../../../src/services/chatMessages/chatMessages");
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");

describe("chatMessages getters", () => {
  let store;
  beforeAll(() => {
    const state = (chatMessages.state = {
      chatConversation: [
        {
          id: 4,
          messages: [
            {
              id: 1,
              messageTitle: "test title 1",
              messageBody: "test body 1",
              receivedTime: new Date(2021, 6, 20, 4, 30, 20),
            },
            {
              id: 2,
              messageTitle: "test title 2",
              messageBody: "test body 2",
              receivedTime: new Date(2021, 6, 29, 4, 30, 20),
            },
            {
              id: 3,
              messageTitle: "test title 3",
              messageBody: "test body 3",
              receivedTime: new Date(2021, 6, 22, 4, 30, 20),
            },
          ],
        },
        {
          id: 5,
        },
      ],
      loaded: true,
    });
    store = createStore({
      modules: {
        chatMessages: {
          namespaced: true,
          state: state,
          getters: chatMessages.getters,
        },
      },
    });
  });

  it("getChatMessageByIdOrderedByMessagesDate", () => {
    const orderedMessages =
      store.getters["chatMessages/getChatMessageByIdOrderedByMessagesDate"](
        4
      ).messages;
    //Check messages are reordered
    expect(orderedMessages[0].id).toBe(1);
    expect(orderedMessages[1].id).toBe(3);
    expect(orderedMessages[2].id).toBe(2);
  });
  it("getAllChatMessages", () => {
    const allChatMessages = store.getters["chatMessages/getAllChatMessages"];
    expect(allChatMessages.length).toBe(2);
  });
  it("getChatMessageById", () => {
    const chatMessage = store.getters["chatMessages/getChatMessageById"](4);
    expect(chatMessage.id).toBe(4);
  });
  it("isLoaded", () => {
    expect(store.getters["chatMessages/isLoaded"]).toBe(true);
  });
});

describe("chatMessages mutations", () => {
  it("setDefaultState", () => {
    const state = {};
    chatMessages.mutations.setDefaultState(state);

    expect(state.chatConversation.length).toBe(0);
    expect(state.loaded).toBe(false);
  });
  it("addMessageToConversation", () => {
    const state = {
      chatConversation: [
        {
          id: 1,
          messages: [],
        },
      ],
    };
    const payload = {
      id: 1,
      isUser: false,
      text: "test text",
      markRead: false,
    };

    chatMessages.mutations.addMessageToConversation(state, payload);
    expect(state.chatConversation[0].messages.length).toBe(1);
  });
  it("setChatConversation", () => {
    const state = {
      chatConversation: [],
    };
    const payload = [
      {
        id: 2,
        messages: [],
      },
    ];
    chatMessages.mutations.setChatConversation(state, payload);

    expect(state.chatConversation.length).toBe(1);
    expect(state.chatConversation[0].id).toBe(2);
  });
  it("addChatConversation", () => {
    const state = {
      chatConversation: [],
    };
    const payload = {
      id: 3,
      senderName: "test name",
      senderIcon: "test icon",
      senderIconAltText: "test alt text",
      lastRead: new Date(),
      messages: [],
    };
    chatMessages.mutations.addChatConversation(state, payload);

    expect(state.chatConversation.length).toBe(1);
    expect(state.chatConversation[0].id).toBe(3);
  });
  it("setLastRead", () => {
    const state = {
      chatConversation: [
        {
          id: 4,
          lastRead: undefined,
        },
      ],
    };
    chatMessages.mutations.setLastRead(state, 4);

    expect(state.chatConversation[0].lastRead).not.toBe(undefined);
  });
  it("setLoaded", () => {
    const state = {
      loaded: false,
    };
    chatMessages.mutations.setLoaded(state);

    expect(state.loaded).toBe(true);
  });
});

describe("chatMessages actions", () => {
  let store;
  let mockedMutations;
  beforeEach(() => {
    mockedMutations = {
      setDefaultState: jest.fn(),
      addMessageToConversation: jest.fn(),
      setChatConversation: jest.fn(),
      addChatConversation: jest.fn(),
      setLoaded: jest.fn(),
      setLastRead: jest.fn(),
    };
    store = createStore({
      modules: {
        inbox,
        chatMessages: {
          namespaced: true,
          actions: chatMessages.actions,
          mutations: mockedMutations,
        },
      },
    });
  });
  it("initializeChatMessages", async () => {
    const payload = {};
    await store.dispatch("chatMessages/initializeChatMessages", payload);
    expect(mockedMutations.setDefaultState).toHaveBeenCalledTimes(1);
    expect(inbox.actions.selectDefaultInboxItem).toHaveBeenCalledTimes(1);
    expect(mockedMutations.addChatConversation).toHaveBeenCalledTimes(1);
    expect(mockedMutations.setLoaded).toHaveBeenCalledTimes(1);
  });
  it("sendChatMessage", async () => {
    const payload = {};
    await store.dispatch("chatMessages/sendChatMessage", payload);
  });
  it("markChatRead", () => {
    store.dispatch("chatMessages/markChatRead", 5);

    //Test argument being passed to mutation correctly
    const setLastReadArgs = mockedMutations.setLastRead.mock.calls[0][1];
    expect(setLastReadArgs).toBe(5);
    expect(mockedMutations.setLastRead).toHaveBeenCalledTimes(1);
  });
});
