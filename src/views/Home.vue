<template>
  <div class="home">
    <LeftSidebar/>
    <Postlist/>
    <RightSidebar/>
  </div>
    <Footer/>
</template>

<script>
// @ is an alias to /src

import Postlist from '@/components/Postlist.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Postlist,
    LeftSidebar,
    RightSidebar,
    Footer
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .home {
    display: flex;
    justify-content: space-between;
  }
}

 /**ipad over 1024  */
@media screen and (min-device-width: 1024px) and (max-device-width: 1400px) {
  .home{
  display: flex;
  justify-content: space-between;
 }
}
</style>
