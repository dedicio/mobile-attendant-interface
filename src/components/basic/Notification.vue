<script setup lang="ts">
import { defineProps, reactive, withDefaults } from 'vue'

type Theme = 'info' | 'success' | 'error'

interface Props {
  theme?: Theme
  message?: string
}

const props = withDefaults(
    defineProps<Props>(),
    {
        theme: 'info',
    }
)
const customClasses: string[] = reactive([])

const classes = {
    info: 'bg-sky-100 text-sky-900 border-sky-500',
    success: 'bg-emerald-100 text-emerald-900 border-emerald-500',
    error: 'bg-rose-100 text-rose-900 border-rose-500',
}

if (props.theme === 'info') {
    customClasses.push(classes.info)
} else if (props.theme === 'success') {
    customClasses.push(classes.success)
} else if (props.theme === 'error') {
    customClasses.push(classes.error)
}
</script>

<template>
    <div
        v-if="props.message"
        class="py-2 px-4 rounded border"
        :class="customClasses">
        {{ props.message }}
    </div>
</template>