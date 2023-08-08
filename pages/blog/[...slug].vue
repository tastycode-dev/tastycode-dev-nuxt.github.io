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
        time {{ formatDate(doc.date) }}
    ContentRenderer.article-body(:value="doc")
</template>
