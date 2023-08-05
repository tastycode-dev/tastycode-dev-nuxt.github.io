<script setup>
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toISOString().split("T")[0];
}
</script>

<template lang="pug">
article
  ContentDoc(v-slot="{doc}")
    header
      h1 {{doc.title}}
      h4
        time {{ formatDate(doc.date) }}
        |  by {{doc.author}}
    ContentRenderer.article-body(:value="doc")
</template>
