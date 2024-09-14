<template>
    <div class="container">
        <MainContent></MainContent>
    </div>
    
</template>

<script setup>
    import MainHeader from '@/components/MainHeader.vue';
    import MainContent from '@/components/MainContent.vue';
    import MainFooter from '@/components/MainFooter.vue';
    import PlaceHolder from '@/components/PlaceHolder.vue';

</script>

<style lang="less" scoped>
body{
    margin: 0;
}
.container{
    display: flex;
    // flex-direction: column;
    flex-grow: 1;
    flex-basis: 50px;
    padding-left: 64px;
    padding-right: 64px;
    background-image: url('@/assets/back.jpg');
}
.main{
    display: flex;
    // flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    flex-basis: 1;
    flex-grow: 10;

}

</style>