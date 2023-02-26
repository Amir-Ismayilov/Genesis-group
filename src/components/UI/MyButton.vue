<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
button {
  align-items: flex-end;
  width: 100px;
  padding: 5px 10px;
  background: none;
  border-color: blue;
}

button:hover {
  background: blue;
  transition-duration: 0.5s;
}
</style>