import { mount } from "@vue/test-utils";
import Banner from "../../../src/components/atoms/Banner";

// The component to test
test("this is the title", () => {
  const wrapper = mount(Banner, {
    props: {
      title: "Service Canada Labs",
      body: "This site will change",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Service Canada Labs");
  expect(wrapper.text()).toContain("This site will change");
});
