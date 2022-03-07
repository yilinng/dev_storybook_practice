import { mount } from '@vue/test-utils';

import Postlist from '../../src/components/Postlist.vue';

//👇 Our story imported here
import { WithPinnedTasks } from '../../src/components/TaskList.stories';

test('renders pinned tasks at the start of the list', () => {
  const wrapper = mount(Postlist, {
    //👇 Story's args used with our test
    propsData: WithPinnedTasks.args,
  });
  const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
  expect(firstPinnedTask).not.toBe(null);
});