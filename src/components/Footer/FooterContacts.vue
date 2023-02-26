<template>
  <div class="col">
    <h3 class="footer__title">Əlaqə məlumatları</h3>
    <ul class="footer__list footer__list_capitalize">
      <li>
        <p>Asad Ehmedov, Baku Azerbaijan</p>
      </li>
      <li>
        <p>Freephone: <a href="tel:+994-55-469-09-49">+994-55-469-09-49</a></p>
        <p>Freephone: <a href="tel:+994-55-832-09-49">+994-55-832-09-49</a></p>
      </li>
      <li>
        <a class="footer__link footer__link_red footer__link_underline" href="mailto:amir_ismayilov_02@gmail.com" target="_blank" style="color: #db3a3a">
          amir_ismayilov_02@gmail.com
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {menuList, menuClient} from '@/constants/menuLinks'
export default {
  name: 'footerContacts',
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
    }
  }
}
</script>