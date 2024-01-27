import { StoryFn, Meta } from '@storybook/vue3';
import Icon from './Icon.vue';

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        name: {
            control: { type: 'select' },
            options: [
                "add",
                "arrowRight",
                "arrowRightLight",
                "arrowLeft",
                "cart",
                "heart",
                "ok",
                "search",
                "user"
            ],
            defaultValue: "arrowRight",
        },
    },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: `
      <div style="
            display: flex; 
            flex-direction: row; 
            gap: 12px;
            padding: 20px;
            background-color: #1ea7fd;
        ">
        <Icon v-bind="args"/>
      </div>
    `,
});

export const DefaultIcon = Template.bind({});
