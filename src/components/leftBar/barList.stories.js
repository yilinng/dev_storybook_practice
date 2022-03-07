import barList from './barList.vue';

export default {
  title: 'leftBar/barList',
  component: barList,
  argTypes: {
    onClick: {action: 'click'}
  }
}

const Template = (args) => ({
  components: { barList },
  setup(){
    return { args };
  },
  template: `<barList v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  
}
