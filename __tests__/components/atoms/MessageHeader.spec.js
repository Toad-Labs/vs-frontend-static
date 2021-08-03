import { shallowMount } from "@vue/test-utils";
import MessageHeader from "../../../src/components/atoms/MessageHeader";
import { createStore} from "vuex";
import inbox from "../../../src/store/modules/inbox";
jest.mock("../../../src/store/modules/inbox");





describe("MessageHeader component", () => {
  it("ensures that the MessageHeader is displayed", () => {
    const wrapper = shallowMount(MessageHeader, {
      props: {
        headerText: "Header Text",
      },
    });
    expect(wrapper.text()).toContain("Header Text");
  });

  it("ensures that the MessageHeader is displayed", () => {
    let store = createStore({
        modules: {
            inbox,
          },
    })
    const wrapper = shallowMount(MessageHeader, {
     

        
    });
    const backButton = wrapper.find("button");

    backButton.trigger("click");

  
  });


});

