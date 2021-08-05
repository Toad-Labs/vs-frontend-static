import { mount } from "@vue/test-utils";
import ReadNotification from "../../../src/components/atoms/ReadNotification";

describe("ReadNotification component", () => {
  it("ensures that the read notification is displayed", () => {
    const wrapper = mount(ReadNotification, {
      props: {
        dayRead: "Monday",
      },
    });
    expect(wrapper.text()).toContain("Monday");
  });
  // false by default (not read)
  it("ensures ReadNotification icon is shown (message has not been read)", () => {
    const wrapper = mount(ReadNotification);
    expect(wrapper.find("p").exists()).toBe(false); //unread notification has no text/ <p> tag
  });

  it("ensures dayRead date is shown (message has been read)", () => {
    const wrapper = mount(ReadNotification, {
      data() {
        return {
          dayRead: true,
        };
      },
    });
    expect(wrapper.find("p").exists()).toBe(true); //likewise, the day the message was read should appear here.
  });
});
