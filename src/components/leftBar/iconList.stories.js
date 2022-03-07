import iconList from './iconList.vue';

export default {
  title: 'leftBar/iconList',
  component: iconList,
  argTypes: {
    onClick: {action: 'click'}
  }
}

const Template = (args) => ({
  components: { iconList },
  setup(){
    return { args };
  },
  template: `<iconList v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  
}
