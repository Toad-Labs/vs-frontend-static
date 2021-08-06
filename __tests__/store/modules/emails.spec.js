import emails from "../../../src/store/modules/emails";
import { createStore, useStore } from "vuex";
import emailService from "../../../src/services/emails/emails";
jest.mock("../../../src/services/emails/emails");

describe("emails getters", () => {
  it("getMailObject", () => {
    let state = {
      mailObject: "test",
    };
    expect(emails.getters.getMailObject(state)).toBe("test");
  });
  it("getMailObjectById", () => {
    emails.state = {
      mailObject: [
        {
          id: 5,
          value: "test",
        },
      ],
    };
    const store = createStore({
      modules: {
        emails,
      },
    });
    const email = store.getters["emails/getMailObjectById"](5);
    expect(email.value).toBe("test");
  });
});

describe("emails mutations", () => {
  it("setDefaultState", () => {
    const state = {
      mailObject: [],
      loaded: false,
    };
    emails.mutations.setDefaultState(state);

    expect(state.mailObject.length).toBe(0);
    expect(state.loaded).toBe(false);
  });
  it("setMailObject", () => {
    const state = {
      mailObject: [],
    };
    emails.mutations.setMailObject(state, ["test"]);

    expect(state.mailObject[0]).toBe("test");
  });
  //Skipping test as addEmail was never implemented
  it.skip("addEmail", () => {});
  it("setLastRead", () => {
    const state = {
      mailObject: [
        {
          id: 5,
          lastRead: undefined,
        },
      ],
    };
    emails.mutations.setLastRead(state, 5);

    expect(state.mailObject[0].lastRead).not.toBe(undefined);
  });
  it("setLoaded", () => {
    const state = {
      loaded: false,
    };
    emails.mutations.setLoaded(state);

    expect(state.loaded).toBe(true);
  });
});

describe("emails actions", () => {
  let store;
  let mockedMutations;
  beforeEach(() => {
    mockedMutations = {
      addEmail: jest.fn(),
      setDefaultState: jest.fn(),
      setMailObject: jest.fn(),
      setLoaded: jest.fn(),
      setLastRead: jest.fn(),
    };
    store = createStore({
      modules: {
        emails: {
          namespaced: true,
          actions: emails.actions,
          mutations: mockedMutations,
        },
      },
    });
  });

  it("sendEmail", () => {
    store.dispatch("emails/sendEmail", 5);

    const addEmailArgs = mockedMutations.addEmail.mock.calls[0][1];
    expect(addEmailArgs).toBe(5);
    expect(mockedMutations.addEmail).toHaveBeenCalledTimes(1);
  });

  it("initializeMailObject", async () => {
    await store.dispatch("emails/initializeMailObject");

    expect(mockedMutations.setDefaultState).toHaveBeenCalledTimes(1);
    const setMailObjectArgs = mockedMutations.setMailObject.mock.calls[0][1];
    expect(setMailObjectArgs.length).toBe(1);
    expect(mockedMutations.setMailObject).toHaveBeenCalledTimes(1);
    expect(mockedMutations.setLoaded).toHaveBeenCalledTimes(1);
  });

  it("markEmailRead", () => {
    store.dispatch("emails/markEmailRead", 5);

    const setLastReadArgs = mockedMutations.setLastRead.mock.calls[0][1];
    expect(setLastReadArgs).toBe(5);
    expect(mockedMutations.setLastRead).toHaveBeenCalledTimes(1);
  });
});
