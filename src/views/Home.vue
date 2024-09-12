<template>
    <MainHeader></MainHeader>
    <MainContent></MainContent>
    <MainFooter></MainFooter>
    <RouterView> main</RouterView>
</template>

<script setup>
    import MainHeader from '@/components/MainHeader.vue';
    import MainContent from '@/components/MainContent.vue';
    import MainFooter from '@/components/MainFooter.vue';
    import {RouterView}  from 'vue-router';
</script>