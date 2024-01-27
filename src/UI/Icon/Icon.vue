<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import add from '@/assets/icons/add.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import arrowRightLight from '@/assets/icons/arrow-right-lite.svg';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import cart from '@/assets/icons/cart.svg';
import heart from '@/assets/icons/heart.svg';
import ok from '@/assets/icons/ok.svg';
import search from '@/assets/icons/search.svg';
import user from '@/assets/icons/user.svg';

const icons = {
  add,
  arrowRight,
  arrowRightLight,
  arrowLeft,
  cart,
  heart,
  ok,
  search,
  user,
};

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String as PropType<
          'add' | 'arrowRight' | 'arrowRightLight' | 'arrowLeft' | 'cart' | 'heart' | 'ok' | 'search' | 'user'
      >,
      required: true,
    },
  },
  setup(props) {
    const iconSrc = ref(icons[props.name]);

    watch(() => props.name, (newName) => {
      iconSrc.value = icons[newName];
    });

    return {
      iconSrc,
    };
  },
});
</script>

<template>
  <img :src="iconSrc" :alt="name">
</template>