import { StoryFn, Meta } from '@storybook/vue3';
import PageLayout from "./PageLayout.vue";
import Header from '../Header/Header.vue'

export default {
    title: 'Components/PageLayout',
    component: PageLayout
} as Meta<typeof PageLayout>;

export const Default: StoryFn<typeof PageLayout> = (args) => ({
    components: { PageLayout, Header },
    setup() { return { args }; },
    template: `<div style="width: 1200px;"><PageLayout v-bind="args" >
      <template #header>
        <Header />
      </template>
      <template #main>
        Какой-то контент
      </template>
    </PageLayout></div>`,
});
