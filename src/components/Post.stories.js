import Post from './Post.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'main/Post',
  excludeStories: /.*Data$/,
  component: Post,
  argTypes: {
    onSavePost: {},
    onCommendPost: {}
  },
};

export const actionData = {
  onSavePost: action('savePost'),
  onCommendPost: action('commendPost')
}

const Template = (args) => ({
  components: { Post },
  setup(){
    return { args, ...actionData };
  },
  template: `<Post v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  post: {
    id: '1',
    state: 'save_post',
    title: 'File upload -> Filesize',
    tags: ['html', 'css', 'php']
  }
  
}
