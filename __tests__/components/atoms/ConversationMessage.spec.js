import { mount } from '@vue/test-utils'
import ConversationMessage from '../../../src/components/atoms/ConversationMessage'

describe("ConversationMessage component", () => {
    it('ensures message is displayed', () => {
        const wrapper = mount(ConversationMessage, {
            props: {
              text: 'Hello test'
            }
          });
        expect(wrapper.text()).toContain('Hello test');
    });

    it('ensures message styling is from bot', () => {
        const wrapper = mount(ConversationMessage, {
            propsData: {             
              isUser: false,
              isLastMessage: true,
              text: 'Hello test',
            }
          });
        expect(wrapper.classes()).toContain('flex');
        const p = wrapper.find('p');
        expect(p.classes()).toContain('botMessage');
    });

    it('ensures message styling is from user', () => {
        const wrapper = mount(ConversationMessage, {
            propsData: {             
              isUser: true,
              isLastMessage: true,
              text: 'Hello test',
            }
          });
        expect(wrapper.classes()).not.toContain('flex');
        const p = wrapper.find('p');
        expect(p.classes()).toContain('userMessage');
    });

    it('ensures last message shows img', () => {
        const wrapper = mount(ConversationMessage, {
            propsData: {             
                senderIcon: "VA",
                senderIconAltText: "img alt text",
                isUser: true,
                isLastMessage: true,
                text: "this is my last message",
            }
          });
        expect(wrapper.find("img")).toBeTruthy();
    });

    it('ensures not last message does not show img', () => {
        const wrapper = mount(ConversationMessage, {
            propsData: {             
                senderIcon: "VA",
                senderIconAltText: "img alt text",
                isUser: true,
                isLastMessage: false,
                text: "this is my last message",
            }
          });
        expect(wrapper.find("img").exists()).toBe(false);
    });
});
