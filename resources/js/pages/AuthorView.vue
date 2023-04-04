<template>
    <div>
  <ul v-for="author in authors " :key="author.id">
    <li> {{ author.name }}</li>
  </ul>
    </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../store/author'

  const { authors } = storeToRefs(useAuthorStore())
  const { fetchAuthors  } = useAuthorStore()

  fetchAuthors()



</script>
