<template>
    <div class="box">
        Header
        <router-link to="/login">登陆</router-link>
        <router-link to="/register">注册</router-link>
        <div>
            <input type="text" v-model="SearchContent" />
            <button @click="goSearch">搜索</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            SearchContent: "hi",
        };
    },
    methods: {
        goSearch() {
            // 编程式导航
            this.$router.push({
                name: "search",
                params: { k1: this.SearchContent },
                query: { k2: this.SearchContent.toUpperCase() },
            });
        },
    },
};
</script>

<style scoped>
.box {
    width: 100%;
    height: 100px;
    background-color: red;
}
</style>
