<script setup lang="ts">
import {Button, Icon, Text} from "@/UI"
import {formatPrice} from "@/utils";
import {defineProps, ref} from 'vue';

const props = defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  liked: {
    type: Boolean,
    default: false
  },
  added: {
    type: Boolean,
    default: false
  }
});

const liked = ref(props.liked);

function toggleLiked(): void {
  liked.value = !liked.value;
}

const added = ref(props.added);

function toggleAdd(): void {
  added.value = !added.value;
}

</script>

<template>
  <div class="card">
     <Button variant="light" class="like" @click="toggleLiked" :class="[liked ? 'liked' : '']">
       <template #left-icon>
         <Icon v-if="!liked" name="heart" />
         <Icon v-if="liked" name="heartFilled" />
       </template>
     </Button>
    <img :src="props.imgSrc" alt="sneakers">
    <Text>{{props.title}}</Text>
    <div class="price-row">
      <div class="price">
        <Text class="label" size="s">ЦЕНА:</Text>
        <Text bold>{{formatPrice(props.price)}}</Text>
      </div>
      <Button variant="light" class="add" @click="toggleAdd" :class="[added ? 'added' : '']">
        <template #left-icon>
          <Icon v-if="!added" name="add" />
          <Icon v-if="added" name="added" />
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background: #FFF;

    padding: 30px;
    border-radius: 40px;
    border: 1px solid #F3F3F3;

    position: relative;
  }

  .like {
    position: absolute;
    left: 36px;
    top: 29px;
  }

  .price-row {
    margin-top: 14px;

    display: flex;
    justify-content: space-between;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .label {
    color: #BDBDBD;
  }

  .like.liked {
    transition: 0.2s;
    background-color: #FEF0F0;
  }

  .add.added {
    background: linear-gradient(180deg, #89F09C 0%, #3CC755 100%);
  }
</style>