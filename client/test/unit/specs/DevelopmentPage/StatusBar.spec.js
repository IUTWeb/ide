import Vue from 'vue'
import StatusBar from '@/components/DevelopmentPage/StatusBar'

it('should be a div#status-bar', () => {
  const vm = new Vue(StatusBar).$mount()
  const actual = vm.$el.id

  const expected = 'status-bar'

  expect(actual).to.equal(expected)
})
