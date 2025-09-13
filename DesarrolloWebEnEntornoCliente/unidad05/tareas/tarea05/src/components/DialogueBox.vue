<template>
  <div class="dialogue-box">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DialogueBox',
});
</script>

<style scoped>
.dialogue-box {
  border: 1px solid gray;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

.header {
  font-weight: bold;
}

.content {
  margin: 10px 0;
}

.footer {
  text-align: right;
}
</style>