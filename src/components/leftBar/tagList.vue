<template>
  <div class="taglist">
      <h3>Popular Tags</h3>
      <ul>
        <li v-for="tag in tags" :key="tag">
         #{{ tag }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['javascript', 'webdev', 'beginners',
        'tutorial', 'react', 'python',
        'css', 'productivity', 'devops']
    }
  }
}
</script>

<style scoped>

.taglist {
    width: 240px;
    height: 447px;
    background-color: white;
}

h3 {
    margin: 10px;
}

.taglist li {
  list-style-type: none;
  padding: 8px;
  margin-bottom: 7px;
}

</style>
