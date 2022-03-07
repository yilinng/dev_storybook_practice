<template>
    <div class="topcolumn">
        <div class="list">
            <span class="title">Listings</span>
            <span class="other">See all</span>
        </div>
        <div class="listContent">
            <div v-for="listContent in listContents" :key="listContent" class="listli">
                <span class="title">{{ listContent.title }}</span>
                <span class="tag">{{ listContent.tag }}</span>
            </div>
        </div>
        <div class="createList">
            <span>Create a Listings</span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      listContents: [{ title: 'HTML & CSS Basics Course', tag: 'education' },
        { title: 'Tailwind CSS Fundamentals Course', tag: 'education' },
        { title: 'Excited Developer looking for internship or Junior level role', tag: 'forhire' },
        { title: 'Newline: Creating React Libraries from Scratch', tag: 'education' },
        { title: 'Contribute to the next best thing DEVs 👩‍💻👨‍💻👌 will ❤️ - Hoppscotch.io', tag: 'collabs' }]
    }
  }
}
</script>

<style scoped>

.topcolumn {
   width: 100%;
   border:  1px solid var(--gray-bg-900);
   border-radius: 10px;
   background-color: white;
   margin-bottom: 20px;
}

.list {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-bg-900);
    padding: 5px;
}

.list .title {
    font-weight: bold;
    margin: 15px;
}

.list .other {
   margin: 15px;
   font-size: 15px;
   color: blue;
}

.listContent {
    display: block;
}

.listContent .listli {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: rgb(105,105,105);
    border-bottom: 1px solid var(--gray-bg-900);
    padding: 10px;
    cursor: pointer;
}

.listContent .listli:hover {
    background-color: var(--gray-bg-900);
    color: #021691;
}
.listContent .listli .title{
    margin-left: 13px;
    margin-bottom: 10px;
    width: 95%;
    font-size: 15px;
}

.listContent .listli .tag{
    margin-left: 13px;
    font-size: 14px;
}

.createList {
    padding: 15px 0 15px 0;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    font-family: normal;
    font-weight: 400;
}

</style>
