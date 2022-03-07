<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {

  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --gray-bg-900: rgb(232,232,232);
  --gray-bg-200: rgb(248,248,248);
}

html, body {
  height: 100%;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

body {
  background-color: rgb(248,248,248);
}
</style>
