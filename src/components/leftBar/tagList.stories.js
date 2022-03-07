import tagList from './tagList.vue';

export default {
  title: 'leftBar/tagList',
  component: tagList,
  argTypes: {
    onClick: {action: 'click'}
  }
}

const Template = (args) => ({
  components: { tagList },
  setup(){
    return { args };
  },
  template: `<tagList v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  
}
