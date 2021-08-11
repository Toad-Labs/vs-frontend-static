import { mount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import ReadNotification from "../../../src/components/atoms/ReadNotification";

describe("ReadNotification component", () => {
  const wrapper = mount(ReadNotification, {
    global: {
      plugins: [i18n],
    },
  });

  const dayReadProp = "Monday";
  it("ensures that the read notification is displayed", async () => {
    await wrapper.setProps({
      dayRead: dayReadProp,
    });
    expect(wrapper.text()).toContain(dayReadProp); //check that prop is displayed
  });

  // false/empty by default (not read)
  it("ensures ReadNotification icon is shown (message has not been read)", async () => {
    await wrapper.setProps({
      dayRead: "",
    });
    expect(wrapper.text()).toBe(""); //unread notification has no text
  });
});
