<template>
  <div id="editor" style="width: 100vw; height: 100vh; position: relative" />
</template>

<script>
// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import ReactDom from "react-dom";
import { defineComponent } from "vue";
import { PhotoEditorSDKUI, UIEvent } from "photoeditorsdk";

export default defineComponent({
  name: "PhotoEditor",
  props: {},
  mounted() {
    this.initEditor();
  },
  methods: {
    async initEditor() {
      const editor = await PhotoEditorSDKUI.init({
        license: "",
        image: "./example.jpg",
        container: "#editor",
        assetBaseUrl:
          "https://cdn.img.ly/packages/imgly/photoeditorsdk/5.17.5/assets",
      });

      editor.on(UIEvent.EXPORT, (result) => {
        console.log(result);
      });
    },
  },
});
</script>
