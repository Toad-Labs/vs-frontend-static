import { shallowMount } from "@vue/test-utils";
import MessageHeader from "../../../src/components/atoms/MessageHeader";
import { createStore } from "vuex";
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");

describe("MessageHeader component", () => {
  let store;
  beforeAll(() => {
    store = createStore({
      modules: {
        inbox,
      },
    });
  });

  it("ensures that the MessageHeader text is displayed", () => {
    const wrapper = shallowMount(MessageHeader, {
      props: {
        headerText: "Header Text",
      },
      global: {
        provide: {
          store,
        },
      },
    });
    expect(wrapper.text()).toContain("Header Text");
  });

  it("ensures that the MessageHeader back button functions when clicked", () => {
    const wrapper = shallowMount(MessageHeader, {
      global: {
        provide: {
          store,
        },
      },
    });
    const backButton = wrapper.find("button");

    backButton.trigger("click");
    expect(inbox.actions.closeInboxItem).toHaveBeenCalledTimes(1);
  });
});
