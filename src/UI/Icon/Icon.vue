<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import add from '@/assets/icons/add.svg';
import added from '@/assets/icons/added.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import arrowRightLight from '@/assets/icons/arrow-right-lite.svg';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import cart from '@/assets/icons/cart.svg';
import heart from '@/assets/icons/heart.svg';
import heartFilled from '@/assets/icons/heart-filled.svg';
import heartNav from '@/assets/icons/heart-nav.svg';
import ok from '@/assets/icons/ok.svg';
import search from '@/assets/icons/search.svg';
import user from '@/assets/icons/user.svg';
import close from '@/assets/icons/close.svg';

const icons = {
  add,
  added,
  arrowRight,
  arrowRightLight,
  arrowLeft,
  cart,
  heart,
  heartFilled,
  heartNav,
  ok,
  search,
  user,
  close
};

export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String as PropType<
          'add'
          | 'added'
          | 'arrowRight'
          | 'arrowRightLight'
          | 'arrowLeft'
          | 'cart'
          | 'heart'
          | 'heartFilled'
          | 'heartNav'
          | 'ok'
          | 'search'
          | 'user'
          | 'close'
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