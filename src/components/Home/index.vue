<style src="./home.css"></style>

<template>
<PageWrapper>
    <HomeComponent slot="page-body"></HomeComponent>
</PageWrapper>
</template>

<script>

import HomeComponent from './home.vue'

export default {
  components: {
    HomeComponent,
  }
}
</script>
