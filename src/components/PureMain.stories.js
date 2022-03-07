import { app } from '@storybook/vue3';

import { createStore } from 'vuex';

import PureMain from './PureMain.vue';

 import { action } from '@storybook/addon-actions';
 import * as PurePostlistStories from './PurePostlist.stories';

 const store = createStore({
   state: {
     posts: PurePostlistStories.Primary.args.posts,
   },
   actions: {
     savePost(context, id) {
       action("save-post")(id);
     },
     commendPost(context, id) {
       action("commend-post")(id);
     },
   },
 });

app.use(store);

export default {
  title: 'main/PureMain',
  component: PureMain
};

const Template = args => ({
  component: { PureMain },
  setup() {
    return {
      args
    };
  },
  template: '<PureMain v-bind="args" />',
});

export const Primary = Template.bind({});

export const Error = Template.bind({});
 Error.args = {
   error: true
 }