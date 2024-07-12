<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag"> </component>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from "@/stores/modules/setting";
import { ref, watch, nextTick } from "vue";
import { storeToRefs } from "pinia";


let SettingStore = useLayoutSettingStore();
//控制刷新
let flag = ref(true);
//监控刷新按钮是否按下
watch(() => SettingStore.refresh, () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
    })
})
</script>


<script lang="ts">

export default {
    name: 'Main'
}
</script>

<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all 0.3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>