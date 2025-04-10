<template>
  <div class="markdown-editor">
    <div class="editor-container">
      <textarea id="markdown" v-model="content"></textarea>
    </div>
    <div class="preview-container">
      <div v-html="previewContent"></div>
    </div>
  </div>
</template>

<script>
import SimpleMDE from "simplemde";

export default {
  data() {
    return {
      content: "",
      simplemde: null,
    };
  },
  computed: {
    previewContent() {
      return this.simplemde.options.previewRender(this.content);
    },
  },
  mounted() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById("markdown"),
      spellChecker: false,
    });

    this.simplemde.codemirror.on("change", () => {
      this.content = this.simplemde.value();
    });
  },
};
</script>

<style scoped>
.markdown-editor {
  display: flex;
  flex-direction: column;
}

.editor-container {
  width: 100%;
  height: 300px;
}

.preview-container {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
