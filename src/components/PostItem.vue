<template>
  <div class="main_list">
    <div class="post">
      <div class="content_box">
      <div> Başlığ: {{ post.title }}</div>
      <div> Təsvir: {{ post.body }}</div>
      </div>
      <MyButton
          @click="$emit('remove',post)"
      >Sil
      </MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
export default {
  components:{
    MyButton
  },
  props:{
    post:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 50px;
  padding: 15px;
  border: 2px blue solid;
}
</style>