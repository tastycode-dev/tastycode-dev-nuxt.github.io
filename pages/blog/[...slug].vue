<script setup>
  useHeadSafe({
    htmlAttrs: { lang: "en-US" },
    link: [{ rel: "icon", href: "/favicon.ico" }],
    meta: [{ name: "TastyCode" }],
  });

  useSeoMeta({
    author: "Oleksandr Gituliar",
  });
</script>

<template lang="pug">
article
  Header
  ContentDoc(v-slot="{doc}")
    header
      h1 {{doc.title}}
      address
        a(href="https://gituliar.net" rel="author")  {{doc.author}}
        |  •
        |
        time(:datetime=`doc.date` itemprop="datePublished" pubdate="pubdate") {{ formatDate(doc.date) }}
    ContentRenderer.article-body(:value="doc")
</template>
