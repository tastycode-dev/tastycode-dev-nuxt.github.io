<script setup lang="ts">
const author = "Oleksandr Gituliar";
const title = "TastyVoid";
const description = "Blog about C++ programming and quantitative finance";

useSeoMeta({
  author: author,
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const queryDrafts = await queryContent("blog")
  .where({ _partial: true })
  .sort({ _id: 1 })
  .find();

const queryPosts = await queryContent("blog")
  .where({ _partial: false })
  .sort({ _id: -1 })
  .find();

const isDev = process.dev;
</script>

<template lang="pug">
article
  template(v-if="isDev")
    h2 Drafts 
    nav
      ul
        li(v-for="article in queryDrafts" :key="article._path")
          NuxtLink(:to="article._path") {{ article.title }}

  h2 Programming and Quantitative Finance 
  nav
    div.pb-2(v-for="article in queryPosts" :key="article._path")
      h3
        NuxtLink(:to="article._path") {{ article.title }}
      p {{ article.description }}
</template>
