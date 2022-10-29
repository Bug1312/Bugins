<template>
  <div class="flex overflow-y-auto justify-center p-4 w-full h-full md:px-20 bg-main">
    <div class="flex flex-col gap-8 p-4 w-full text-white bg-opacity-40 rounded-lg md:my-10 md:py-8 md:px-6 bg-slate-900 h-min">
      <Plugin v-for="(plugin, i) of plugins" :key="i" :plugin="plugin"></Plugin>
    </div>
  </div>
</template>

<script>
import Plugin from '@c/plugin.vue'
import Plugins from '@a/plugins.js'

export default {
  components: { Plugin },
  data() {
    return { plugins: Plugins.plugins };
  }
}
</script>

<style>

</style>