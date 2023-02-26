<template>
  <div v-if="posts.length > 0">
    <h3 class="postlist">Список пользователей</h3>
    <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove',post)"
    />
  </div>

  <h2 v-else class="postlist" style="color: red">Список пользователей</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      require: true,
    }
  },
}
</script>

<style scoped>
.postlist{
  margin-left: 50px;
  margin-bottom: 15px;
}
</style>