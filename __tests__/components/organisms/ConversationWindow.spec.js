import { shallowMount } from "@vue/test-utils";
import ConversationWindow from "../../../src/components/organisms/ConversationWindow";
import TextInput from "../../../src/components/atoms/TextInput";
import MessageHeader from "../../../src/components/atoms/MessageHeader";
import ConversationMessage from "../../../src/components/atoms/ConversationMessage";
import { createStore, useStore } from "vuex";
import { i18n } from "../../../i18n";
import chatMessages from "../../../src/store/modules/chatMessages";
jest.mock("../../../src/store/modules/chatMessages");
import emails from "../../../src/store/modules/emails";
jest.mock("../../../src/store/modules/emails");
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");

describe("ConversationWindow component", () => {
  let wrapper;
  let store;
  beforeAll(() => {
    chatMessages.actions.sendChatMessage = jest.fn();
    store = createStore({
      modules: {
        chatMessages,
        emails,
        inbox,
      },
    });

    wrapper = shallowMount(ConversationWindow, {
      global: {
        provide: {
          store,
        },
        plugins: [i18n],
      },
    });
  });

  it("Check for message header component", () => {
    expect(wrapper.findComponent(MessageHeader).exists()).toBe(true);
  });

  it("Check for conversation message component", () => {
    expect(wrapper.findComponent(ConversationMessage).exists()).toBe(true);
  });

  it("Check for text input component", () => {
    expect(wrapper.findComponent(TextInput).exists()).toBe(true);
  });

  it("Test sendChatMessage", async () => {
    wrapper.findComponent(TextInput).vm.$emit("add-message", "test value");

    expect(chatMessages.actions.sendChatMessage).toHaveBeenCalledTimes(1);

    const sendChatMessageArgs =
      chatMessages.actions.sendChatMessage.mock.calls[0][1];
    expect(sendChatMessageArgs.id).toBe(1);
    expect(sendChatMessageArgs.message).toBe("test value");
  });
});
