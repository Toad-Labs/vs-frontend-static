import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home";
import { createStore } from "vuex";
import { i18n } from "../../i18n";
import chatMessages from "../../src/store/modules/chatMessages";
jest.mock("../../src/store/modules/chatMessages");
import emails from "../../src/store/modules/emails";
jest.mock("../../src/store/modules/emails");

describe("Test Home.vue view", () => {
  it("Check for h1 exists", () => {
    const store = createStore({
      modules: {
        chatMessages,
        emails,
      },
    });

    const wrapper = mount(Home, {
      global: {
        provide: {
          store,
        },
        plugins: [i18n],
      },
    });

    const h1 = wrapper.find("h1");

    expect(h1.exists()).toBe(true);
  });
});
