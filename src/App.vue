<template>
  <main class="flex w-full h-screen overflow-hidden">
    <SideNav></SideNav>
    <router-view></router-view>
  </main>
</template>

<script>
import SideNav from '@c/side_nav.vue';

export default {
  components: { SideNav }
}
</script>
