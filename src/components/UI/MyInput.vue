<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
name: "my-input",
  props:{
    modelValue:[String, Number]
  },
  methods:{
  updateInput(event){
    this.$emit('updateValue',event.target.value)
  }
  }
}
</script>


<style scoped>
input {
  margin: 10px 0px;
  border: 2px blue solid;
  padding: 5px;
}
</style>