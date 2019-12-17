<template>
  <div>
    <!-- component that shows a pict of a dog and a link to dog details -->
    <a>
      <router-link data-test='dog-name2' :to='{ name: "dog", params: {"id" : dog.id }}'>
        <div>{{ dog.name }}</div>
        <img class='dog' alt='"Image of  " + dog.name' :src='dog.url' />
      </router-link>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ShowDog',
  props: ['dog']
};
</script>

<style scoped>
</style>
