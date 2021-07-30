import { mount } from '@vue/test-utils'
import Home from '../../src/views/Home'
import { createStore } from 'vuex'
import { i18n } from "../../i18n";

describe('Test Home.vue view', () => {

  it('Check for h1 exists', () => {

    const store = createStore({
      getters: {
        "chatMessages/isLoaded": () => true,
        "emails/isLoaded": () => true,
      },
    })

    const wrapper = mount(Home, {
      global:{
        provide: {
          store: store
        },
        plugins: [i18n]
      }
    })

    const h1 = wrapper.find('h1')
    
    expect(h1.exists()).toBe(true)
  })
})
