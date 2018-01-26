<template>
  <div id="development-page">
    <Header />
    <FileTree />
    <CodeEditor />
    <StatusBar />
  </div>
</template>

<script>
import Header from './DevelopmentPage/Header'
import FileTree from './DevelopmentPage/FileTree'
import CodeEditor from './DevelopmentPage/CodeEditor'
import StatusBar from './DevelopmentPage/StatusBar'
export default {
  name: 'DevelopmentPage',
  components: {
    Header,
    FileTree,
    CodeEditor,
    StatusBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#development-page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px 1fr 20px;
  grid-template-areas: 
    "header header"
    "file-tree code-editor"
    "status-bar status-bar";
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}
</style>
