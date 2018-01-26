import Vue from 'vue'
import Header from '@/components/DevelopmentPage/Header'

it('should be a div#header', () => {
  const vm = new Vue(Header).$mount()
  const actual = vm.$el.id

  const expected = 'header'

  expect(actual).to.equal(expected)
})
