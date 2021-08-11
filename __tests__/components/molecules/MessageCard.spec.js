import { shallowMount } from "@vue/test-utils";
import { i18n } from "../../../i18n";
import MessageCard from "../../../src/components/molecules/MessageCard";

describe("MessageCard component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(MessageCard, {
      global: {
        plugins: [i18n],
      },
      props: {
        timestamps: {
          shortTimestamp: "test timestamp",
          fullTimestamp: "tst tmstmp",
        },
        title: "test title",
        paragraphs: "test paragraphs",
      },
    });
  });

  it("Check for timestamp text in MessageCard", () => {
    expect(wrapper.text()).toContain("test timestamp");
  });

  it("Check for abbreviated timestamp text in MessageCard", () => {
    expect(wrapper.text()).toContain("tst tmstmp");
  });

  it("Check for title text in MessageCard", () => {
    expect(wrapper.text()).toContain("test title");
  });

  it("Check for paragraphs text in MessageCard", () => {
    expect(wrapper.text()).toContain("test paragraphs");
  });
});
