<template>
  <aside v-if="!ismobile < 660">
    <TopColumnList/>
    <TopColumnHelp/>
    <TopColumnDissue/>
  </aside>
</template>

<script>
import TopColumnList from '@/components/rightBar/topColumnList.vue'
import TopColumnHelp from '@/components/rightBar/topColumnHelp.vue'
import TopColumnDissue from '@/components/rightBar/topColumndissue.vue'

export default {
  name: 'LeftSidebar',
  components: {
    TopColumnList,
    TopColumnHelp,
    TopColumnDissue
  },
  data () {
    return {
      ismobile: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.ismobile = window.innerWidth
    })
  }
}
</script>

<style scoped>
 aside{
  display: block;
  width: 17%;
  margin: 15px;
 }

 @media screen and (max-width: 660px) {
   aside {
    display: none;
    width: 0;
    margin: auto;
   }
 }

  /** pad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  aside {
    display: none;
    width: 0;
    margin: 0;
  }
}

/**ipad over 1024  */
@media screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
  aside {
    display: block;
    width: 20%;
    margin: 15px 0;
  }
}
</style>
