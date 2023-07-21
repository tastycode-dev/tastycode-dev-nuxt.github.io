<script setup lang="ts">
const queryDrafts = await queryContent("blog")
  .where({ _partial: true })
  .sort({ _id: -1 })
  .find();

const queryPosts = await queryContent("blog")
  .where({ _partial: false })
  .sort({ _id: -1 })
  .find();

const isDev = process.dev;
</script>

<template lang="pug">
template(v-if="isDev")
  h2 Drafts 
  article
    nav
      ul
        li(v-for="article in queryDrafts" :key="article._path")
          NuxtLink(:to="article._path") {{ article.title }}
          p {{ article.description }}

h2 Articles 
article
  nav
    ul
      li(v-for="article in queryPosts" :key="article._path")
        NuxtLink(:to="article._path") {{ article.title }}
        p {{ article.description }}
</template>
