import { StoryFn, Meta } from '@storybook/vue3';
import Slider from './Slider.vue';

export default {
    title: 'Components/Slider',
    component: Slider
} as Meta<typeof Slider>;

export const DefaultSlider: StoryFn<typeof Slider> = (args) => ({
    components: { Slider },
    setup() { return { args }; },
    template: `<div style="width: 1000px; height: 300px;">
      <Slider v-bind="args" />
    </div>`,
});
