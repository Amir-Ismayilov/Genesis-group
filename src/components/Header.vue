<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="/home/public"><img class="logo" src="../assets/images/icons/logo.png" alt="main_logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse collapse-fonts-size navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li :class="navAddClass(menu.name)" v-for="(menu, index) in headerMenuList" :key="index">
            <router-link active-class="active" class="nav-link" aria-current="page" :to="menu.path">
              {{ menu.title }}
            </router-link>
          </li>
        </ul>
        <div class="icons">
          <a href="#" target="_blank"><img src="../assets/images/icons/facebook.png" alt="facebook"></a>
          <a href="#" target="_blank"><img src="../assets/images/icons/instagram.png" alt="instagram"></a>
          <a href="#" target="_blank"><img src="../assets/images/icons/youtube.png" alt="youtube"></a>
          <a href="#" target="_blank"><img src="../assets/images/icons/google.png" alt="google"></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {menuList} from '@/constants/menuLinks'

export default {
  name: 'mainHeader',
  props: {
    msg: String,
  },
  data() {
    return {
      headerMenuList: menuList,
      nav_class: "nav-item menu-link",
    }
  },
  methods: {
    navAddClass(route_name) {
      if (this.$route.name === route_name) {
        return "nav-item menu-link active"
      } else {
        return "nav-item menu-link"
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/layouts/index";

.navbar {
  height: 90px;
  position: fixed;
  z-index: 10;
  width: 100%;
  background: cornsilk;
}

.navbar-nav {
  height: 90px;
}

.logo {
  width: 140px;
}

.navbar-brand {
  padding-right: 10%;
}

.collapse-fonts-size {
  font-size: 18px;
}

.menu-link {
  padding: 25px 18px;


  &:hover {
    background: rgba(244, 243, 243, 0.82);
  }
}

.icons {
  width: 17%;
}

.icons a {
  margin: 2px 0;
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
}

.icons img {
  margin: 5px auto;
  width: 20px;
}
</style>