import { StoryFn, Meta } from '@storybook/vue3';
import Header from './Header.vue';

export default {
    title: 'Components/Header',
    component: Header,
} as Meta<typeof Header>;

export const DefaultCard: StoryFn<typeof Header> = (args) => ({
    components: { Header },
    setup() { return { args }; },
    template: `<div style="width: 1000px">
      <Header v-bind="args" />
    </div>`,
});
