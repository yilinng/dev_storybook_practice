<template>
  <div>
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <div v-else class="page lists-show">
      <Postlist />
    </div>
  </div>
</template>

<script>
  import Postlist from './Postlist.vue';

  export default {
    name: 'PureMain',
    components: { Postlist },
    props: {
      error: { type: Boolean, default: false },
    },
  };
</script>