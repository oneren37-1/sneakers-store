import { StoryFn, Meta } from '@storybook/vue3';
import Button from './Button.vue';
import Icon from "../Icon/Icon.vue";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        block: {
            control: { type: 'boolean' },
            defaultValue: true,
        }
    },
} as Meta<typeof Button>;

export const DefaultButton: StoryFn<typeof Button> = (args) => ({
    components: { Button },
    setup() { return { args }; },
    template: '<Button v-bind="args">Button</Button>',
});

export const LefIconButton: StoryFn<typeof Button> = (args) => ({
    components: { Button, Icon },
    setup() { return { args }; },
    template: `<Button v-bind="args">
      <template #left-icon>
        <Icon name="arrowLeft" />
      </template>
      Button
    </Button>`,
});

export const RightIconButton: StoryFn<typeof Button> = (args) => ({
    components: { Button, Icon },
    setup() { return { args }; },
    template: `<Button v-bind="args">
      Button
      <template #right-icon>
        <Icon name="arrowRight"/>
      </template>
    </Button>`,
});
