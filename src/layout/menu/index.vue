<!-- 递归路由组件编写 -->
<template>

    <template v-for=" (route, index) in routes" :key="route.path">

        <el-menu-item :index="route.path" class="menu_item" v-if="!route.children && !route.meta.hidden"
            @click="gotoRoute(route.path)">
            <el-icon color="red">
                <component :is="route.meta.icon"> </component>
            </el-icon>
            <template #title>
                <span>{{ route.meta.title }} </span>
            </template>
        </el-menu-item>
        <el-menu-item class="menu_item" :index="route.children[0].path"
            v-if="route.children && route.children.length == 1 && !route.children[0].meta.hidden"
            @click="gotoRoute(route.children[0].path)">
            <el-icon>
                <component :is="route.children[0].meta.icon"> </component>
            </el-icon>
            <template #title>
                <span>{{ route.children[0].meta.title }} </span>
            </template>
        </el-menu-item>
        <el-sub-menu class="menu_item" :index="route.path" v-if="route.children && route.children.length > 1">

            <template #title>
                <el-icon>
                    <component :is="route.meta.icon"> </component>
                </el-icon>
                <span>{{ route.meta.title }} </span>
            </template>
            <Menu :routes="route.children"></Menu>
        </el-sub-menu>
    </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps(
    ['routes']
)
const $router = useRouter()
const gotoRoute = (path: string) => {
    $router.push(path);
}
</script>
<script lang="ts">

export default {
    name: 'Menu'
}
</script>

<style scoped></style>