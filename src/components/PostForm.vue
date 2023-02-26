<template>
  <div class="main_wrapper">
    <form @submit.prevent class="maker_post">
      <h4>Postunuzu yaradın</h4>
      <my-input
          v-model="post.title"
          class="input"
          type="text"
          placeholder=" Başlığı daxil edin"
      >
      </my-input>
      <my-input
          v-model="post.body"
          class="input"
          type="text"
          placeholder="Təsvir daxil edin"
      >
      </my-input>
      <MyButton
          style="align-self: flex-end"
          @click="createPost"
      >
        elave et
      </MyButton>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
    MyButton
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: "",
        body: ""
      }
    },

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.main_wrapper {
  margin: 100px 50px;
}

.maker_post {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

h4 {
  margin-bottom: 10px;
}
</style>