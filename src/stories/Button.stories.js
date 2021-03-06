import Button from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    actions: {
      actions: {
        handles: ['mouseover', 'click .btn'],
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked'},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'ml'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Button v-bind="args"/>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'this is Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: 'pink'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: '#ff0'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: '#eee'
};
