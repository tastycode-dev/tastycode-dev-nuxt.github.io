<script setup lang="ts">
useHeadSafe({
  htmlAttrs: { lang: "en-US" },
  link: [{ rel: "icon", href: "/favicon.ico" }],
  meta: [{ name: "TastyCode" }],
});

useSeoMeta({
  author: "Oleksandr Gituliar",
  title: "About | TastyCode",
  description: "Blog about programming and quantitative finance",
});
</script>

<template lang="pug">
article
  Header
  h1 About

  p My name is Oleksandr and I 
    mark love tasy code
    | .
  
  p I am a father and a husband. Born in 
    img(src="/img/ua.svg" height="18px" style="display: inline; position: relative; top: -2px; border-radius: 3px;")
    |  in 1987. Live in 
    img(src="/img/eu.svg" height="18px" style="display:inline; position: relative; top: -2px; border-radius: 3px;")
    |  since 2009.

  p
    strong Resume. 
    | See 
    a(href="https://www.linkedin.com/in/gituliar/") LinkedIn
    |  or 
    a(href="/gituliar.pdf") gituliar.pdf
    | .


  p
    strong Academia. 
    | I was enjoyed to study 
    mark Particle Physics
    |  for 10 years.

  p
    strong Industry. 
    | I work as a 
    mark Quantitative Developer
    |  since 2018.

  p 
    strong Programming. 
    | Having 
    mark fun with computers
    |  since 1999.

  p
    strong Career. 
    | Always glad to discuss 
    mark interesting job offers
    |.

  p
    strong Contact. 
    | The best way to 
    mark reach me
    |  is by 
    a(href="https://www.linkedin.com/in/gituliar/") LinkedIn
    |  or email 
    b ole
    b ks
    b andr@
    b gitu
    b liar.
    b net

</template>
