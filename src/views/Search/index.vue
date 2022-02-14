<template>
    <div class="box">
        Search--
        {{this.$route.params.k1}}--
        {{this.$route.query.k2}}
    </div>
</template>

<script>
export default({
})
</script>

<style scoped>
.box{
    width: 100%;
    height: 100px;
}
</style>
