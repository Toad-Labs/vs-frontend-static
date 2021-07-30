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
    expect(wrapper.find("#not-read").exists()).toBe(true);
  });

  it("ensures dayRead date is shown (message has been read)", () => {
    const wrapper = mount(ReadNotification, {
      data() {
        return {
          dayRead: true,
        };
      },
    });
    console.log(wrapper.html());
    expect(wrapper.find("#read").exists()).toBe(true);
  });
});
