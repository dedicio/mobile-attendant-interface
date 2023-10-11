<script setup lang='ts'>
interface Props {
  label: string
  url: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <li class="flex-grow text-center p-2">
    <RouterLink
      :to="url"
      class="flex w-full justify-center items-center h-full align-middle rounded border uppercase font-bold">
      <span>
        {{ label }}
      </span>
    </RouterLink>
  </li>
</template>