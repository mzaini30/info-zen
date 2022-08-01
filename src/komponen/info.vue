<script setup="" lang="ts">
import latest from "latest-blogspot";
import { Ref, ref } from "vue";

const isi = ref({
  judul: "",
  link: "",
});

if (localStorage.latest) {
  isi.value = JSON.parse(localStorage.latest);
}

async function init() {
  let data = await latest("https://blog.zenia.my.id", 1);
  isi.value = data.blog[0];
  localStorage.latest = JSON.stringify(isi.value);
}
init();
</script>

<template>
  <a
    :href="isi.link"
    class="block p-3 text-center truncate underline decoration-dotted text-sm text-white bg-black"
    >{{ isi.judul }}
  </a>
</template>
