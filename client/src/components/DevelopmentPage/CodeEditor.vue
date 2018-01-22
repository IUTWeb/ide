<template>
  <div  id="code-editor" >
    <editor
      v-model="code"
      theme="twilight"
      width="100%"
      height="100%"
      @init="init"
      v-bind:lang="lang"
    />
  </div>
</template>

<script>
import editor from 'vue2-ace-editor'

const theme = 'twilight' // TODO: Detect theme and set `theme` accordingly
const lang = 'javascript' // TODO: Detect file language and set `lang` accordingly
const code = `
while (true) {
  code() // Don't forget to use our editor for coding! ;)
}
` // TODO: Detect file contents and set `code` accordingly

export default {
  name: 'CodeEditor',
  components: {
    editor
  },
  data () {
    return {
      code,
      lang
    }
  },
  methods: {
    init () {
      require(`brace/theme/${theme}`)
      require(`brace/mode/${lang}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#code-editor {
  background-color: #444;
  grid-area: code-editor;
}
</style>
