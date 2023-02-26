<template>
  <div class="col">
    <h3 class="footer__title">Naviqasiya</h3>
    <ul class="footer__list">
      <li class="footer__item" v-for="(menu, i) in footerMenu" :key="i">
        <router-link :to="{ name:menu.name, params: null, }" class="footer__link">{{ menu.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {menuList, menuClient} from '@/constants/menuLinks'
export default {
  name: 'footerNavigation',
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
    }
  }
}
</script>