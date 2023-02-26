<template>
  <main-container>
    <template v-slot:header>
      <Header />
    </template>
    <main>
      <router-view />
    </main>
    <template v-slot:footer>
      <Footer />
    </template>
  </main-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import MainContainer from "@/components/MainContainer";

export default {
  components:{
    Header,
    Footer,
    MainContainer
  },
}
</script>