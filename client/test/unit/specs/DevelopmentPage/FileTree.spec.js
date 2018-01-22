import Vue from 'vue'
import FileTree from '@/components/DevelopmentPage/FileTree'

it('should be a div#file-tree', () => {
  const vm = new Vue(FileTree).$mount()
  const actual = vm.$el.id

  const expected = 'file-tree'

  expect(actual).to.equal(expected)
})
