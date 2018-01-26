import Vue from 'vue'
import CodeEditor from '@/components/DevelopmentPage/CodeEditor'

it('should be a div#code-editor', () => {
  const vm = new Vue(CodeEditor).$mount()
  const actual = vm.$el.id

  const expected = 'code-editor'

  expect(actual).to.equal(expected)
})
