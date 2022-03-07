<template>
    <div class="topcolumn">
        <div class="list">
            <span class="title">#discuss</span>
        </div>
        <div class="listContent">
            <div v-for="listContent in listContents" :key="listContent" class="listli">
                <span class="title">{{ listContent.title }}</span>
                <span v-if="listContent.new" class="new">New</span>
                <span v-else class="comment">{{ listContent.comment }} comments</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      listContents: [{ title: 'Do you think StackOverflow is toxic?', tag: 'education', new: false, comment: 34 },
        { title: 'What are your favourite CSS frameworks so far? 💅', tag: 'education', new: false, comment: 31 },
        { title: 'Show off your laptops stickers here!', tag: 'forhire', new: false, comment: 2 },
        { title: 'What was your win this week?', tag: 'education', new: false, comment: 53 },
        { title: 'TOP5 books to read this month:', tag: 'collabs', new: true, comment: 0 }]
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
    font-weight: bolder;
    margin: 15px;
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

.listContent .listli .comment{
    margin-left: 13px;
    font-size: 14px;
}

.listContent .listli .new{
    margin-left: 13px;
    font-size: 14px;
    background-color: #FFC502;
    border-radius: 5px;
    padding: 3px;
    width: 40px;
}

</style>
