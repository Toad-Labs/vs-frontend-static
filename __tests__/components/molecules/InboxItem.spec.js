import { shallowMount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import InboxItem from "../../../src/components/molecules/InboxItem";
import ReadNotification from "../../../src/components/atoms/ReadNotification";

describe("InboxItem component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(InboxItem, {
      global: {
        plugins: [i18n],
      },
      props: {
        inboxItem: {
          selected: true,
          id: 1,
          senderIcon: "test senderIcon",
          senderName: "test senderName",
          dayRead: undefined,
          teaserText: "test teaserText",
        },
      },
    });
  });

  it("Check for senderName text in ItemInbox", () => {
    expect(wrapper.text()).toContain("test senderName");
  });

  it("Check for teaserText text in ItemInbox", () => {
    expect(wrapper.text()).toContain("test teaserText");
  });

  it("Check for ReadNotification component", () => {
    expect(wrapper.findComponent(ReadNotification).exists()).toBe(true);
  });

  it("Check for emit on InboxItem click", () => {
    const li = wrapper.find("li");
    li.trigger("click");

    expect(wrapper.emitted("select-inbox-item")).toBeTruthy();
  });

  it("Check for emit on InboxItem enter keydown", () => {
    const li = wrapper.find("li");
    li.trigger("keyup.enter");

    expect(wrapper.emitted("select-inbox-item")).toBeTruthy();
  });
});
