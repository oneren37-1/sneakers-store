import { StoryFn, Meta } from '@storybook/vue3';
import Placeholder from './Placeholder.vue';


export default {
    title: 'Placeholder',
    component: Placeholder,
    args: {
        imgSrc: "/src/assets/placeholders/em1.png",
        title: "У вас нет заказов",
        text: "Вы нищеброд?\n Оформите хотя бы один заказ.",
        buttonText: "Вернуться назад"
    },
} as Meta<typeof Placeholder>;

export const DefaultPlaceholder: StoryFn<typeof Placeholder> = (args) => ({
    components: { Placeholder },
    setup() { return { args }; },
    template: `
      <div style="height: 500px; border: 2px solid red">
        <Placeholder v-bind="args"/>
      </div>`,
});
