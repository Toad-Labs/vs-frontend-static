import inbox from "../../../src/store/modules/inbox";
import { createStore, useStore } from "vuex";
import chatMessages from "../../../src/store/modules/chatMessages";
jest.mock("../../../src/store/modules/chatMessages");
import emails from "../../../src/store/modules/emails";
jest.mock("../../../src/store/modules/emails");

describe("inbox getters", () => {
  let store;
  beforeAll(() => {
    store = createStore({
      modules: {
        chatMessages,
        emails,
        inbox,
      },
    });
  });

  it("getInboxItems", () => {
    const inboxItems = store.getters["inbox/getInboxItems"];
    expect(inboxItems.length).toBe(2);
    expect(inboxItems[0].type).toBe("chat");
    expect(inboxItems[1].type).toBe("email");
  });
  it("getSelectedInboxItem", () => {
    //get inbox item id of 1 which is the mocked chat
    store.state.inbox.selectedInboxItemId = 1;

    const inboxItem = store.getters["inbox/getSelectedInboxItem"];
    expect(inboxItem.selected).toBe(true);
    expect(inboxItem.type).toBe("chat");
  });
  it("getSelectedInboxItemType", () => {
    store.state.inbox.selectedInboxItemId = 1;

    const inboxItemType = store.getters["inbox/getSelectedInboxItemType"];
    expect(inboxItemType).toBe("chat");
  });
  it("isMobileDrawerOpen", () => {
    let state = {
      mobileDrawerOpen: true,
    };
    expect(inbox.getters.isMobileDrawerOpen(state)).toBe(true);
    state = {
      mobileDrawerOpen: false,
    };
    expect(inbox.getters.isMobileDrawerOpen(state)).toBe(false);
  });
  it("isLoaded", () => {
    const loaded = store.getters["inbox/isLoaded"];
    expect(loaded).toBe(true);
  });
});

describe("inbox mutations", () => {
  it("updateSelectedInboxItemId", () => {
    const state = { selectedInboxItemId: 0 };
    inbox.mutations.updateSelectedInboxItemId(state, 5);

    expect(state.selectedInboxItemId).toBe(5);
  });
  it("updateMobileDrawerOpen", () => {
    const state = { mobileDrawerOpen: false };
    inbox.mutations.updateMobileDrawerOpen(state, true);

    expect(state.mobileDrawerOpen).toBe(true);
  });
});

describe("inbox actions", () => {
  let store;
  let mockedMutations;
  beforeEach(() => {
    mockedMutations = {
      updateSelectedInboxItemId: jest.fn(),
      updateMobileDrawerOpen: jest.fn(),
    };
    store = createStore({
      modules: {
        inbox: {
          namespaced: true,
          actions: inbox.actions,
          mutations: mockedMutations,
        },
      },
    });
  });
  it("selectDefaultInboxItem", () => {
    store.dispatch("inbox/selectDefaultInboxItem", 5);

    //Test argument being passed to mutation correctly
    const updateSelectedInboxItemIdArgs =
      mockedMutations.updateSelectedInboxItemId.mock.calls[0][1];
    expect(updateSelectedInboxItemIdArgs).toBe(5);
    expect(mockedMutations.updateSelectedInboxItemId).toHaveBeenCalledTimes(1);
  });
  it("selectInboxItem", () => {
    store.dispatch("inbox/selectInboxItem", 5);

    //Test argument being passed to mutation correctly
    const updateSelectedInboxItemIdArgs =
      mockedMutations.updateSelectedInboxItemId.mock.calls[0][1];
    expect(updateSelectedInboxItemIdArgs).toBe(5);
    const updateMobileDrawerOpenArgs =
      mockedMutations.updateMobileDrawerOpen.mock.calls[0][1];
    expect(updateMobileDrawerOpenArgs).toBe(true);
    expect(mockedMutations.updateSelectedInboxItemId).toHaveBeenCalledTimes(1);
    expect(mockedMutations.updateMobileDrawerOpen).toHaveBeenCalledTimes(1);
  });
  it("closeInboxItem", () => {
    store.dispatch("inbox/closeInboxItem");

    //Test argument being passed to mutation correctly
    const updateMobileDrawerOpenArgs =
      mockedMutations.updateMobileDrawerOpen.mock.calls[0][1];
    expect(updateMobileDrawerOpenArgs).toBe(false);
    expect(mockedMutations.updateMobileDrawerOpen).toHaveBeenCalledTimes(1);
  });
});
