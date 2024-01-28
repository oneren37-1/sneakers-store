import { StoryFn, Meta } from '@storybook/vue3';
import Text from './Text.vue';

export default {
    title: 'UI/Typography/Text',
    component: Text,
    argTypes: {
        bold: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        size: {

        }
    },
} as Meta<typeof Text>;

export const DefaultText: StoryFn<typeof Text> = (args) => ({
    components: { Text },
    setup() { return { args }; },
    template: `
      <div style="
        display: flex; 
        flex-direction: column; 
        gap: 10px;
      ">
        <Text
            v-for="size in ['s', 'm', 'l']"
            :bold="args.bold"
            :size="size"
            :key="size"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </div>
    `,
});
