import { mount } from '@vue/test-utils'
import ChatOptionButton from '../../../src/components/atoms/ChatOptionButton'

describe("ChatOptionButton component", () => {
    it('ensures text button is displayed', () => {
        const wrapper = mount(ChatOptionButton, {
            props: {
              text: 'Yes'
            }
          });
        expect(wrapper.text()).toContain('Yes');
    });

    it('ensures sendFormButton is called on click', () => {
        const wrapper = mount(ChatOptionButton, {
            props: {
              text: 'Yes'
            }
          });

        const quickReplyBtn = wrapper.find('button');
        const spy = spyOn(wrapper.vm, 'sendFromButton');
        quickReplyBtn.trigger('click');
        expect(spy).toBeCalled();
    });
});
