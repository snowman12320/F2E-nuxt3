import { mount } from '@vue/test-utils'
import IndexTabsGroup from '@/components/IndexTabsGroup.vue'

describe('IndexTabsGroup', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexTabsGroup)
    expect(wrapper.vm).toBeTruthy()
  })
})
