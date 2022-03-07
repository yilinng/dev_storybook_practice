import PureLeftSidebar from './PureLeftSidebar.vue';

export default {
  title: 'leftbar/leftbar',
  component: PureLeftSidebar,
  argTypes: {
    onCloseMenu: {}
  }
}

const Template = args => ({
  components: { PureLeftSidebar },
  setup(){
    return { args }
  },
  template: `<PureLeftSidebar v-bind="args"/>`
});

export const Primary = Template.bind({});

Primary.args = {
  
}