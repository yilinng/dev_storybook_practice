<template>
  <PureLeftSidebar :clickMenu="clickMenu" @close-menu="closeMenu"/>
</template>

<script>
import PureLeftSidebar from './PureLeftSidebar.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'LeftSidebar',
  components: {
    PureLeftSidebar
  },
 setup() {
   const store = useStore();

   const clickMenu = computed(() => store.state.clickMenu);

   const closeMenu = () => store.dispatch('closeMenu');

   return { clickMenu, closeMenu }
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
