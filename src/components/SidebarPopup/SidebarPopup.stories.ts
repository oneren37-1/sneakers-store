import { StoryFn, Meta } from '@storybook/vue3';
import PageLayout from "../PageLayout/PageLayout.vue"
import Header from "../Header/Header.vue"
import SidebarPopup from "./SidebarPopup.vue";

export default {
    title: 'Components/SidebarPopup',
    component: PageLayout,
    args: {
        show: true
    },
} as Meta<typeof PageLayout>;

export const Default: StoryFn<typeof PageLayout> = (args) => ({
    components: { PageLayout, Header, SidebarPopup },
    setup() { return { args }; },
    template: `<div style="width: 1200px;"><PageLayout v-bind="args" >
      <template #header>
        <Header />
      </template>
      <template #main>
        Какой-то контент
        <SidebarPopup :show="args.show" />
      </template>
    </PageLayout></div>`,
});
