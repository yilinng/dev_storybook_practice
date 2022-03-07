import topColumn from './topColumn.vue';

export default {
  title: 'leftBar/topColumn',
  component: topColumn,
  argTypes: {
    onClick: {action: 'click'}
  }
}

const Template = (args) => ({
  components: { topColumn },
  setup(){
    return { args };
  },
  template: `<topColumn v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  
}
