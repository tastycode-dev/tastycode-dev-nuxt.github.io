<script setup>
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toISOString().split("T")[0];
}
</script>

<template lang="pug">
article
  .header
    a(id="header" href="/")
      img(src="/img/logo.png" id="logo")
      span.align-middle TastyCode
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
