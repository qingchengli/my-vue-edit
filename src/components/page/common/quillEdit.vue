<template>
  <div>
    <vue-editor id="editor" v-model="Content" @text-change="changeContent"></vue-editor>
    <div v-html="Content"></div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'quill-edit',
  props: {
    editorContent: String
  },
  components: {
    VueEditor
  },
  data () {
    return {
      Content: this.editorContent
    }
  },
  methods: {
    changeContent () {
      this.$emit('changeContent', this.Content)
    }
  }
}
</script>
