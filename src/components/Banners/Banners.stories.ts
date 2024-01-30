import { StoryFn, Meta } from '@storybook/vue3';
import {StanSmithBanner} from './index.ts';

export default {
    title: 'Components/Banners',
    component: StanSmithBanner
} as Meta<typeof StanSmithBanner>;

export const DefaultStanSmithBanner: StoryFn<typeof StanSmithBanner> = (args) => ({
    components: { StanSmithBanner },
    setup() { return { args }; },
    template: `<div style="width: 1000px; height: 300px;">
      <StanSmithBanner v-bind="args" />
    </div>`,
});
