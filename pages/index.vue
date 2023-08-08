<script setup lang="ts">
const author = "Oleksandr Gituliar";
const title = "TastyCode";
const description = "Blog about programming and quantitative finance";

useHeadSafe({
  htmlAttrs: { lang: "en-US" },
});

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
h1.hidden {{description}}
article
  Header
  template(v-if="isDev")
    h2 Drafts 
    nav
      ul
        li(v-for="post in queryDrafts" :key="post._path")
          NuxtLink(:to="post._path") {{ post.title }}

  nav
    div.pb-2(v-for="post in queryPosts" :key="post._path")
      h3
        NuxtLink(:to="post._path") {{ post.title }}
        div.text-sm
          time {{ formatDate(post.date) }}
      p.text-sm {{ post.description }}
</template>
