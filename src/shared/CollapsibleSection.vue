<template>
  <div>
    <div class="header">
      <span v-if="open" @click="toggle()">&#x25B2; Collapse</span>
      <span v-if="!open" @click="toggle()">&#x25BC; Expand</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
  .header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
  }
</style>
