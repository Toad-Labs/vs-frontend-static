import { mount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import ConversationMessage from "../../../src/components/atoms/ConversationMessage";

describe("ConversationMessage component", () => {
  const wrapper = mount(ConversationMessage, {
    global: {
      plugins: [i18n],
    },
  });

  it("ensures message is displayed", async () => {
    await wrapper.setProps({ text: "Hello test" });
    expect(wrapper.text()).toContain("Hello test");
  });

  it("ensures message styling is from bot", async () => {
    await wrapper.setProps({
      isUser: false,
      isLastMessage: true,
      text: "Hello test",
    });
    expect(wrapper.classes()).toContain("flex");
    const botMessage = wrapper.find(".botMessage");
    expect(botMessage.exists()).toBe(true);
  });

  it("ensures message styling is from user", async () => {
    await wrapper.setProps({
      isUser: true,
      isLastMessage: true,
      text: "Hello test",
    });
    expect(wrapper.classes()).not.toContain("flex");
    const userMessage = wrapper.find(".userMessage");
    expect(userMessage.exists()).toBe(true);
  });

  it("ensures last message shows img", async () => {
    await wrapper.setProps({
      senderIcon: "VA",
      senderIconAltText: "img alt text",
      isUser: true,
      isLastMessage: true,
      text: "this is my last message",
    });
    expect(wrapper.find("img")).toBeTruthy();
  });

  it("ensures not last message does not show img", async () => {
    await wrapper.setProps({
      senderIcon: "VA",
      senderIconAltText: "img alt text",
      isUser: true,
      isLastMessage: false,
      text: "this is my last message",
    });
    expect(wrapper.find("img").exists()).toBe(false);
  });
});
