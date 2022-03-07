<template>
   <article>
        <div class="crayons-article__header" id="main-title">
            <div class="crayons-article__cover">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Kw1usc-K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hgf6eoigdfycro6fln9z.jpg" width="1000" height="420" style="background-color:#dddddd;" class="crayons-article__cover__image" alt="Cover image for File upload -> Filesize">
            </div>
            <div class="person">
               <div class="imag">
                <img style="border-radius: 50%;" src="https://res.cloudinary.com/practicaldev/image/fetch/s--xzIJLtUn--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/817392/ca34eff3-6dcf-46c6-8c4d-c0b0ec01ca78.png" alt="id120 profile" class="crayons-avatar__image" loading="lazy">
              </div>
              <div class="information">
                <span class="name">{{ name }}</span>
                <span class="date">{{ date }}</span>
              </div>
            </div>
            <h3 class="title">
                {{ post.title }}
            </h3>
            <div class="tagList">
                <span v-for="tag in post.tags" :key="tag">
                    #{{ tag }}
                </span>
            </div>
            <div class="addCommon" >
                  <span class="btn" @click="commendPost">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                Add comment</span>
                <span class="lastRead">1 min read 
                  <button class="saveBtn" v-if="isSaved" @click="savePost">Save</button>
                  <button class="saveBtn" v-else @click="savePost">Saved</button>
                </span>
            </div>
        </div>
        </article>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Post' ,
  props: {
    post: {
    type: Object,
    required: true,
    default: () => ({id: '', state: '', title: '', tags: [] }),
    validator: post => ['id', 'state', 'title', 'tags'].every(key => key in post)
    },
  },
  emits: ['commend-post', 'save-post'],

  setup(props, {emit}){
    props = reactive(props);
    return {
     isSaved: computed(() => props.post.state === 'save_post'),
   
     commendPost() {
       emit('commend-post', props.post.id)
     },

     savePost() {
       emit('save-post', props.post.id)
     }
     
    }
  },
  data () {
    return {
      name: 'Joy Lee',
      date: 'Feb 19',
      title: 'File upload -> Filesize',
      state: 'save',
      tags: ['javascript', 'html', 'css'],
      ismobile: window.innerWidth,
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
