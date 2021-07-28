import { mount } from '@vue/test-utils'

// The component to test
const Banner = {
  template: '<h1>{{ title }}</h1>',
  props: ['title']
}

test('this is the title', () => {
  const wrapper = mount(Banner, {
    props: {
      title: 'Hello world title'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world title')
})