<template>
    <div class="tab_container">
        <div class="container_left">
            <el-icon class="icon" @click="SettingStore.changefold">
                <component :is="!fold ? 'Fold' : 'Expand'"></component>
            </el-icon>

            <el-breadcrumb separator-icon="ArrowRight">
                <div class="bread_item">
                    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" :to="{ path: item.path }">
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span style="vertical-align: top; margin: 0px 5px;"> {{ item.meta.title }}</span>
                    </el-breadcrumb-item>
                </div>
            </el-breadcrumb>

        </div>
        <div class="container_right">
            <el-button class="btn" icon="Refresh" @click="SettingStore.Refresh" circle>
            </el-button>
            <el-button class="btn" icon="FullScreen" @click="fullscreen_clicked" circle>
            </el-button>
            <el-button class="btn" icon="Setting" circle>
            </el-button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRef, toRefs } from 'vue';
import useLayoutSettingStore from "@/stores/modules/setting";
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useRouter } from "vue-router";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
const SettingStore = useLayoutSettingStore();
const { fold } = storeToRefs(SettingStore);
const $route = useRoute();
function fullscreen_clicked() {
    const full = document.fullscreenElement;
    //判断是否是全屏模式
    if (!full) {
        document.documentElement.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
}

</script>

<script lang="ts">

export default {
    name: 'Tabbar'
}

</script>


<style scoped>
.btn {
    width: 25px;
    height: 25px;
}

.tab_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.container_left {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

}

.container_right {
    display: flex;
    align-items: center;
}

.container_user {
    display: flex;
    align-items: center;
    /* background-color: aqua; */
    padding: 5px;
}

.icon {
    margin-right: 10px;
}

.icon:hover {
    cursor: pointer;
}

.bread_item {
    display: flex;
    flex-wrap: nowrap;
}

span {
    white-space: nowrap;
}
</style>