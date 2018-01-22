import Vue from 'vue'
import DevelopmentPage from '@/components/DevelopmentPage'

it('should be a div#development-page', () => {
  const vm = new Vue(DevelopmentPage).$mount()
  const actual = vm.$el.id

  const expected = 'development-page'

  expect(actual).to.equal(expected)
})
