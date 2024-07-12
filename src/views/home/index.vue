<template>
    <div class="home_container">
        <el-menu :collapse="fold" background-color="transparent" :default-active="$route.path" class="menu_container">
            <Menu :routes="allroutes"> </Menu>
        </el-menu>
        <div class="container">
            <Tabbar class="toolbar_container"> </Tabbar>
            <Main class="main_container"></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from '@/layout/menu/index.vue';
import { allroutes } from "@/router/routers";
import { useRoute } from 'vue-router';
import Tabbar from '@/layout/tabbar/index.vue';
import useLayoutSettingStore from "@/stores/modules/setting";
import { storeToRefs } from "pinia";
import Main from "@/layout/main/index.vue";
const SettingStore = useLayoutSettingStore();
const { fold } = storeToRefs(SettingStore);
let $route = useRoute();


</script>

<style scoped lang="scss">
.home_container {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.menu_container {
    background-color: $menucolor;
    width: auto;
    height: 100vh;
    overflow-y: hidden;
    flex-shrink: 0;
}

.main_container {
    background-color: white;
    border-width: 20px;
    border-color: black;
    /* width: 85vw; */
    padding: 5px;
    height: 92vh;
}

.toolbar_container {
    background-color: $tabbarcolor;
    /* width: 85vw; */
    height: 8vh;
}
</style>