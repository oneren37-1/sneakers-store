import { StoryFn, Meta } from '@storybook/vue3';
import Card from './Card.vue';

export default {
    title: 'Card',
    component: Card,
    args: {
        imgSrc: "/src/assets/sneakers/image 5.jpg",
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 12999
    },
} as Meta<typeof Card>;

export const DefaultCard: StoryFn<typeof Card> = (args) => ({
    components: { Card },
    setup() { return { args }; },
    template: `<div style="width: 210px;">
      <Card v-bind="args" />
    </div>`,
});
