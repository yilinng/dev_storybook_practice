import PurePostlist from './PurePostlist.vue';

import * as PostStories from './Post.stories';

export default {
  title: 'main/PurePostlist',
  component: PurePostlist,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  argTypes: {
    onCommendPost: {},
    onSavePost: {},
  },
}

const Template = args => ({
  components: { PurePostlist },
  setup(){
    return { args, ...PostStories.actionData };
  },
  template: `<PurePostlist v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  posts: [
    { ...PostStories.Primary.args.post, id: '1', state: 'save_post', title: 'first post', tags: ['css', 'html', 'javascript'] },
    { ...PostStories.Primary.args.post, id: '2', state: 'save_post', title: 'second post', tags: ['css', 'php', 'javascript'] },
    { ...PostStories.Primary.args.post, id: '3', state: 'save_post', title: 'third post', tags: ['css', 'c#', 'javascript'] },
    { ...PostStories.Primary.args.post, id: '4', state: 'save_post', title: 'fourth post', tags: ['css', 'ruby', 'javascript'] },
    { ...PostStories.Primary.args.post, id: '5', state: 'save_post', title: 'fifth post', tags: ['css', 'java', 'javascript'] },
    { ...PostStories.Primary.args.post, id: '6', state: 'save_post', title: 'sixth post', tags: ['css', 'python', 'javascript'] }
  ]
}

export const WithPinnedTasks = Template.bind({});

WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Primary.args.posts.slice(0, 5),
    { id: '6', title: 'post 6 (pinned)', state: 'save_post' },
  ],
};

export const Loading = Template.bind({});

Loading.args = {
  posts: [],
  loading: true,
};

export const Empty = Template.bind({});

Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
