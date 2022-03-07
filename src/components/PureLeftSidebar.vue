<template>
  <aside v-if="!ismobile < 660" class="desktop">
     <TopColumn/>
     <BarList/>
     <IconList/>
     <TagList/>
  </aside>
  <aside :class="[clickMenu ? 'move mobile' : 'mobile']">
     <div v-if="clickMenu" class="firstTitle">
        <span class="title">DEV Community</span>
        <span class="close" @click="onCloseMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="abzuzdshskb5bi7zg23x98qpxms2fsrh" aria-hidden="true" class="crayons-icon c-btn__icon"><title id="abzuzdshskb5bi7zg23x98qpxms2fsrh">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
        </span>
      </div>
    <TopColumn/>
     <BarList/>
     <IconList/>
     <TagList/>
  </aside>
</template>

<script>
import TopColumn from './leftBar/topColumn.vue'
import BarList from './leftBar/barList.vue'
import IconList from './leftBar/iconList.vue'
import TagList from './leftBar/tagList.vue'
import { reactive } from 'vue';

export default {
  name: 'PureLeftSidebar',
  components: {
    TopColumn,
    BarList,
    IconList,
    TagList
  },
  props: {
    clickMenu: { type: Boolean, default: false }
  },
  emits: ['closeMenu'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onCloseMenu(){
        emit('closeMenu')
      }
    }
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
 .desktop{
  display: block;
  margin: 15px;
  width: 15%;
 }

 .mobile {
   width: 75%;
   display: none;
   position: relative;
 }

 @media screen and (max-width: 660px) {
   .desktop {
    display: none;
    margin: auto;
    width: 0%;
   }

   .mobile {
    z-index: 10;
    display: block;
    position: absolute;
    background-color: white;
    top: 0;
    left: -400px;
    overflow: hidden;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    height: 100%;
  }

  .move {
    opacity: 1;
    left: 0;
  }

  .mobile .firstTitle{
    display: flex;
    justify-content: space-between;
  }

  .mobile .firstTitle > span{
   margin: 10px;
  }
 }

 /** pad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
 .desktop {
  display: block;
  margin: 10px 0;
  width: 22%;
 }

 /**ipad over 1024  */
@media screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
  .desktop{
  display: block;
  margin: 15px 0;
  width: 22%;
 }
}
}
</style>
