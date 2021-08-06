import { mount } from "@vue/test-utils";
import ReadNotification from "../../../src/components/atoms/ReadNotification";

describe("ReadNotification component", () => {
  const dayReadProp = "Monday";
  it("ensures that the read notification is displayed", () => {
    const wrapper = mount(ReadNotification, {
      props: {
        dayRead: dayReadProp,
      },
    });
    expect(wrapper.text()).toContain(dayReadProp); //check that prop is displayed
  });

  // false/empty by default (not read)
  it("ensures ReadNotification icon is shown (message has not been read)", () => {
    const wrapper = mount(ReadNotification);
    expect(wrapper.text()).toBe(""); //unread notification has no text
  });
});
