<template>
 <PurePostlist :posts="posts" @save-post="savePost" @commend-post="commendPost"/>
</template>

<script>
import PurePostlist from './PurePostlist.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'PurePostlist',
  components: { PurePostlist },

  setup() {
    const store = useStore();
    
    const posts = computed(() => store.state.posts);

    const savePost = post => store.dispatch('savePost', post);

    const commendPost = post => store.dispatch('commendPost', post);

    return {
      posts, savePost, commendPost
    }
  }
}
</script>

<style scoped>
 .postList {
   width: 35%;
   margin: 20px 0 20px -50px;
 }

 .bgDark {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
 }

 .keyList {
     display: flex;
     justify-content: flex-start;
 }

 .keyList button {
    margin: 0 10px 10px 0;
    font-size: 17px;
    padding: 10px;
    background-color: rgb(248,248,248);
    border: 1px solid rgb(248,248,248);
    border-radius: 5px;
    cursor: pointer;
 }

 .keyList button:hover {
     background-color: white;
     color: blue;
     border: 1px solid white;
 }

 .chosed {
    font-weight: bold;
 }

 .crayons-article__header{
    width: 100%;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid var(--gray-bg-900);
    margin-bottom: 10px;
 }

 .crayons-article__header:hover {
   border: 1px solid blue;
 }

 img {
     height: 90%;
     width: 100%;
     border-top-left-radius: 5px;
     border-top-right-radius: 5px;
 }

 .person {
   display: flex;
   justify-content: flex-start;
   margin: 10px;
 }

 .person > div {
   margin-right: 10px;
 }

 .person .information > span{
   display: block;
 }

 .person .information .name {
   font-size: 15px;
   font-family: sans-serif;
   margin-bottom: 5px;
 }

 .person .information .date {
   font-size: 13px;
   font-family: sans-serif;
 }

  .person .imag {
     width: 30px;
     height: 30px;
 }

 .crayons-article__header h3 {
     margin-left: 50px;
     margin-bottom: 10px;
     text-align: left;
     font-size: 25px;
     font-weight: bold;
 }

 .crayons-article__header .tagList {
    margin-left: 50px;
    margin-bottom: 10px;
 }

 .crayons-article__header .tagList > span{
    margin-right: 15px;
 }

 .addCommon {
    margin-left: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
 }

 .addCommon .btn {
   padding: 5px;
   border-radius: 5px;
   cursor: pointer;
 }

 .addCommon .btn:hover {
   background-color: var(--gray-bg-900);
 }

 .addCommon svg {
   vertical-align: bottom;
 }

 .addCommon .lastRead{
   font-size: 13px;
   font-family: sans-serif;
   margin-right: 10px;
 }

 .addCommon .saveBtn{
   font-size: 15px;
   font-family: sans-serif;
   padding: 7px;
   margin-right: 15px;
   background-color: #d6d6d7;
   border: 1px solid #d6d6d7;
   border-radius: 5px;
 }

 .addCommon .saveBtn:hover{
   background-color: rgb(169,169,169);
   border: 1px solid rgb(169,169,169);
   color: white;
 }

 @media screen and (max-width: 660px)  {
  .postList {
    width: 100%;
    margin: auto;
   }

  img {
    height: 90%;
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .keyList button {
    margin: 10px 10px 10px 0;
  }
 }

 @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   .postList {
    width: 68%;
    margin: 20px 0;
   }
 }

/**ipad over 1024  */
@media screen and (min-device-width: 1024px) and (max-device-width: 1400px) {
  .postList {
    width: 50%;
    margin: 20px 0;
  }
}

</style>
