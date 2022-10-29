<template>
  <div class="p-4 w-full rounded-lg border-2 shadow-lg xl:px-10 bg-slate-400 border-slate-300">
    <div>
      <h3 class="font-bold underline sm:h-12">{{ plugin.name }}</h3>
    </div>
    <div class="flex flex-row gap-6 sm:mb-8">
      <div class="w-28 min-w-[7rem] h-28 select-none text-center items-center justify-center hidden drop-shadow-full sm:flex">
        <img v-if="plugin.image.type === 'url'" :src="url" class="w-full"/>
        <i v-if="plugin.image.type === 'fontawesome'" class="w-full h-full text-[7rem]" :class="plugin.image.image"></i>
        <i v-if="plugin.image.type === 'google'" class="w-full h-full text-[7rem] material-icons text-center scale-[125%]">{{ plugin.image.image }}</i>
      </div>
      <p class="my-3 whitespace-pre-wrap sm:my-6 sm:text-lg">{{ plugin.description }}</p>
      <div class="hidden flex-col gap-4 ml-auto lg:flex">
        <a :disabled="!plugin?.docs" :href="plugin.docs" class="px-6 py-3 text-center text-emerald-900 bg-emerald-400 rounded-xl shadow-lg transition-all cursor-pointer hover:shadow-2xl hover:scale-105 hover:bg-emerald-300">
          Documentation
        </a>
        <a :href="plugin.download?.url" :download="plugin.download.file" :title="plugin.deprecated" :class="plugin.deprecated ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300' : 'bg-emerald-400 text-emerald-900 hover:bg-emerald-300'" class="py-3 text-center rounded-xl shadow-lg transition-all cursor-pointer hover:shadow-2xl hover:scale-105">
          Download<span v-if="plugin.deprecated" class="text-red-900">*</span>
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-1 ml-auto sm:gap-4 sm:flex-row lg:hidden">
      <a :disabled="!plugin?.docs" :href="plugin.docs" class="w-full sm:max-w-[50%] min-w-fit px-6 py-3 rounded-xl bg-emerald-400 text-emerald-900 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-emerald-300 transition-all text-center cursor-pointer">
        Documentation
      </a>
      <a :href="plugin.download?.url" :download="plugin.download.file" :title="plugin.deprecated" :class="plugin.deprecated ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300' : 'bg-emerald-400 text-emerald-900 hover:bg-emerald-300'" class="cursor-pointer text-center w-full sm:max-w-[50%] min-w-fit px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
        Download<span v-if="plugin.deprecated" class="text-red-900">*</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['plugin'],
  data() { return { url:'' } },
  mounted() {
    
    if (this.plugin.image.type === 'url') import(`../assets/images/${this.plugin.image.image}.webp`).then(module => this.url = module.default.replace(/^\/@fs/, ''))
  }
}
</script>

<!-- No need to scope, this is the only time I will use disabled -->
<style lang="postcss"> 
*[disabled="true"] {
  @apply bg-gray-300 cursor-not-allowed text-gray-900 hover:scale-100 hover:shadow-lg;
}
</style>