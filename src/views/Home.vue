<template>
    <div class="container">
        <MainHeader></MainHeader>
        <MainContent></MainContent>
        <MainFooter></MainFooter>   
    </div>
    
</template>

<script setup>
    import MainHeader from '@/components/MainHeader.vue';
    import MainContent from '@/components/MainContent.vue';
    import MainFooter from '@/components/MainFooter.vue';

</script>

<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: column;
    
}

</style>