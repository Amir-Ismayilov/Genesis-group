<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <FooterIcons/>
        <FooterNavigations/>
        <FooterClient/>
        <FooterContacts/>
      </div>
    </div>
  </footer>
</template>

<script>
import {menuList, menuClient} from '@/constants/menuLinks'
import FooterIcons from '@/components/Footer/FooterIcons.vue'
import FooterNavigations from '@/components/Footer/FooterNavigation.vue'
import FooterClient from '@/components/Footer/FooterClient.vue'
import FooterContacts from '@/components/Footer/FooterContacts.vue'

export default {
  name: 'mainFooter',
  components: {FooterIcons, FooterNavigations, FooterClient, FooterContacts},

  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
    }
  }
}
</script>
