<script setup>
    const countProps= defineProps(["count"])
    defineEmits(["large"])
    import { ref } from 'vue'
    const count = ref(countProps.count)
    const postSize = ref(1)

</script>


<template>
    <div :style="{fontSize: postSize + 'em'}">
        <button @click="count++">you click this {{count}}</button>
        <button @click="$emit('large')">large</button>
        <slot />
    </div>
</template>


