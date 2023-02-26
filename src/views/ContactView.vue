<!--<template>-->
<!--  <MainContainer>-->
<!--    <h1>Contact page</h1>-->
<!--  </MainContainer>-->
<!--</template>-->

<!--<script setup>-->
<!--import MainContainer from "@/components/MainContainer";-->
<!--</script>-->

<!--<template>-->
<!--  <div class="main">-->
<!--    count {{ count }}-->
<!--    <button @click="plus">+</button>-->
<!--    <button @click="minus">-</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      count: 0,-->
<!--    }-->
<!--  },-->

<!--  methods:{-->
<!--plus(){-->
<!--  this.count +=1-->
<!--},-->
<!--    minus(){-->
<!--  this.count -=1-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.main{-->
<!--  margin: 200px 50px;-->
<!--}-->
<!--</style>-->
<!--<PostList/>-->

<!--<script>-->
<!--let weight = 305;-->
<!--let time = 5;-->
<!--if (weight > 300 && time < 6) {-->
<!-- alert("yes");-->
<!-- }-->
<!-- else {-->
<!-- alert("no");-->
<!-- }-->
<!--</script>-->

<template>
  <PostForm @create="createPost"/>
  <PostList
      @remove="removePost"
      :posts="posts"
  />
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {posts} from "@/constants/menuLinks";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>