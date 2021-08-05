import { mount } from "@vue/test-utils";
import FeedbackButton from "../../../src/components/atoms/FeedbackButton";

// The component to test
test("This is the feedback button, checks to see that the text is rendered", () => {
  const wrapper = mount(FeedbackButton, {
    props: {
      text: "Send Feedback",
      colorClass: "bg-blue-primary text-white",
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Send Feedback");
});
