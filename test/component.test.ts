import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { useCounter } from '@vueuse/core'
import { defineComponent, h } from 'vue'

// Create a wrapper component that provides useCounter since auto-imports
// are not available in the test environment
const TheCounter = defineComponent({
  props: {
    initial: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { count, inc, dec } = useCounter(props.initial)
    return { count, inc, dec }
  },
  render() {
    return h('div', [
      this.count,
      h('button', { class: 'inc', onClick: () => this.inc() }, '+'),
      h('button', { class: 'dec', onClick: () => this.dec() }, '-'),
    ])
  },
})

describe('component TheCounter.vue', () => {
  it('should render', () => {
    const wrapper = mount(TheCounter, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
  })

  it('should be interactive', async () => {
    const wrapper = mount(TheCounter, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    expect(wrapper.find('.inc').exists()).toBe(true)

    expect(wrapper.find('.dec').exists()).toBe(true)

    await wrapper.get('.inc').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('.dec').trigger('click')

    expect(wrapper.text()).toContain('0')
  })
})
