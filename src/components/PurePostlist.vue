<template>
<div class="list-items">
  <template v-if="loading">
    <div v-for="n in 6" :key="n" class="loading-item">
      <span class="glow-checkbox" />
      <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
    </div>
  </template>

  <div v-else-if="isEmpty">
    <div class="wrapper-message">
      <span class="icon-check" />
      <div class="title-message">You have no tasks</div>
      <div class="subtitle-message">Sit back and relax</div>
    </div>
  </div>

  <template v-else>
     <!--<div :class="[this.$store.state.clickMenu ? 'postList bgDark' : 'postList']">  -->
     <div class="postList">   
      <div class="keyList">
          <button class="chosed">Relevant</button>
          <button>Latest</button>
          <button>Top</button>
      </div>
      <Post 
        v-for="post in postsInOrder" 
        :key="post.id" 
        :post="post"
        @commendPost="onCommendPost"
        @savePost="onSavePost"
        />
     </div>
  </template>
</div>
</template>

<script>
import Post from './Post.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'PurePostlist',
  components: { Post },
  props: {
    posts: { type: Array, required: true, default: () => [] },
    loading: {type: Boolean, default: false },
  },
  emits: ['commendPost', 'savePost'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      isEmpty: computed(() => props.posts.length === 0),
      postsInOrder: computed(() => {
        return [
          ...props.posts.filter(t => t.state === 'save_post'),
          ...props.posts.filter(t => t.state !== 'save_post'),
        ]
      }),
      onCommendPost(postId) {
        emit('commendPost', postId)
      },

      onSavePost(postId) {
        emit('savePost', postId)
      },
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

  .loading-item {
   height: 3rem;
   width: 100%;
   background: white;
   display: flex;
   align-items: center;
   line-height: 1rem;
   padding-left: 16px;
 }
 .loading-item .glow-checkbox,
 .loading-item .glow-text span {
   animation: glow 1.5s ease-in-out infinite;
   background: #eee;
   color: transparent;
   cursor: progress;
   display: inline-block;
 }
 .loading-item .glow-checkbox {
   margin-right: 16px;
   width: 12px;
   height: 12px;
 }
 .loading-item + .loading-item {
   border-top: 1px solid #f0f9fb;
 }

  @keyframes glow {
   0%,
   100% {
     opacity: 1;
   }
   50% {
     opacity: 0.5;
   }
 }
  .list-items {
   position: relative;
   background: white;
   min-height: 288px;
 }
 .list-items .select-placeholder {
   border: none;
   width: 48px;
 }

  .wrapper-message {
   position: absolute;
   top: 45%;
   right: 0;
   bottom: auto;
   left: 0;
   width: auto;
   height: auto;
   transform: translate3d(0, -50%, 0);
   text-align: center;
 }
 .wrapper-message [class^="icon-"],
 .wrapper-message [class*=" icon-"] {
   font-size: 48px;
   line-height: 56px;
   color: #2cc5d2;
   display: block;
 }
 .wrapper-message .title-message {
   font-size: 16px;
   line-height: 24px;
   font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-weight: 800;
   color: #555;
 }
 .wrapper-message .subtitle-message {
   font-size: 14px;
   line-height: 20px;
   color: #666;
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
