<template>
  <PhotoEditor />
</template>

<script>
import { defineComponent } from "vue";
import PhotoEditor from "./components/PhotoEditor.vue";

export default defineComponent({
  name: "App",
  components: {
    PhotoEditor,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
