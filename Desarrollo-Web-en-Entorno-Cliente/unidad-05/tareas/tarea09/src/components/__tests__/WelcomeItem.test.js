import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'

import WelcomeItem from '@/components/WelcomeItem.vue'

describe('WelcomeItem.vue', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(WelcomeItem, {
      slots: {
        icon: '<span class="custom-icon">👍</span>',
        heading: 'Item Heading',
        default: 'Item description'
      }
    })

    expect(wrapper.find('.item i').text()).toBe('👍')
    expect(wrapper.find('.details h3').text()).toBe('Item Heading')
    expect(wrapper.find('.details').text()).toContain('Item description')
  })
})
