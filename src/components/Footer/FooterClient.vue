<template>
  <div class="col"> <h3 class="footer__title">Müştərilər üçün</h3>
    <ul class="footer__list">
      <li v-for="({ name, path }, i) in footerMenuClient" :key="i">
        <router-link :to="path" class="footer__link">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {menuList, menuClient} from '@/constants/menuLinks'
export default {
  name: 'footerClient',
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
    }
  }
}
</script>