<script setup lang="ts">
  useHeadSafe({
    htmlAttrs: { lang: "en-US" },
    link: [{ rel: "icon", href: "/favicon.ico" }],
    meta: [{ name: "TastyCode" }],
  });

  useSeoMeta({
    author: "Oleksandr Gituliar",
    title: "TastyCode",
    description: "Blog about programming and quantitative finance",
  });

  const queryDrafts = await queryContent("blog").where({ _partial: true }).sort({ _id: 1 }).find();

  const queryPosts = await queryContent("blog").where({ _partial: false }).sort({ _id: -1 }).find();

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
        div.text-sm.text-stone-500
          time {{ formatDate(post.date) }}
      //- p.text-sm {{ post.description }}
</template>
