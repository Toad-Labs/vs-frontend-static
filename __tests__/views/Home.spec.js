import { shallowMount } from '@vue/test-utils'
import Home from '../../src/views/Home'

const store = {}

describe('Test Home.vue view', () => {

  it('Check for h1 exists', () => {
    const wrapper = shallowMount(Home)

    const h1 = wrapper.find('h1')
    
    expect(h1.exists().toBe(true))
  })
})
