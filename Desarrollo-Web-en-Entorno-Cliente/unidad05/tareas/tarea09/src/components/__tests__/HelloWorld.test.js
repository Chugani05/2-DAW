import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the msg prop correctly', () => {
    const msg = 'Hello, Vue!'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toContain(msg)
  })

  it('renders links correctly', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('a[href="https://vite.dev/"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://vuejs.org/"]').exists()).toBe(true)
  })

  it('has the correct classes', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('h1').classes()).toContain('green')
    expect(wrapper.find('.greetings').classes()).toContain('greetings')
  })
})
