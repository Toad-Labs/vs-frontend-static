import { mount } from "@vue/test-utils";
import PhaseBanner from "../../../src/components/atoms/PhaseBanner";

describe("PhaseBanner tests", () => {
  test("this is the Phase text and link text", () => {
    const wrapper = mount(PhaseBanner, {
      props: {
        phase: "Beta",
        linkText: "Back to something",
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Beta");
    expect(wrapper.text()).toContain("Back to something");
  });
});
