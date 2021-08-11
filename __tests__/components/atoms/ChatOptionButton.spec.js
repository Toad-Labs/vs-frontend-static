import { mount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import ChatOptionButton from "../../../src/components/atoms/ChatOptionButton";

describe("ChatOptionButton component", () => {
  const wrapper = mount(ChatOptionButton, {
    global: {
      plugins: [i18n],
    },
  });

  it("ensures text button is displayed", async () => {
    await wrapper.setProps({
      text: "Yes",
    });
    expect(wrapper.text()).toContain("Yes");
  });

  it("ensures sendFormButton is called on click", async () => {
    await wrapper.setProps({
      text: "Yes",
    });

    const quickReplyBtn = wrapper.find("button");
    const spy = spyOn(wrapper.vm, "sendFromButton");
    quickReplyBtn.trigger("click");
    expect(spy).toBeCalled();
  });
});
