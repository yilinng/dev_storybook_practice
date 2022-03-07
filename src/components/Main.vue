<template>
  <PureMain :error="error" />
</template>

<script>
  import { computed } from 'vue';

  import { useStore } from 'vuex';

  import PureMain from './PureMain.vue'

  export default {
    name: 'Main',
    components: { PureMain },
    setup() {
      //👇 Creates a store instance
      const store = useStore();

      //👇 Retrieves the error from the store's state
      const error = computed(() => store.state.error);
      return {
        error,
      };
    },
  };
</script>