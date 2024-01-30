import { StoryFn, Meta } from '@storybook/vue3';
import Title from './Heading.vue';

export default {
    title: 'UI/Typography/Heading',
    component: Title,
    argTypes: {
        level: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5],
            defaultValue: 1,
        },
    },
} as Meta<typeof Title>;

export const DefaultTitle: StoryFn<typeof Title> = (args) => ({
    components: { Title },
    setup() { return { args }; },
    template: `
      <div style="
            display: flex; 
            flex-direction: column; 
            gap: 10px;
        ">
        <Title v-for="level in 5" :key="level" :level="level">
          Заголовок {{ level }}
        </Title>
      </div>
    `,
});
