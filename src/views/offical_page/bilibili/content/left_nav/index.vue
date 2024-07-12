<template>
    <div class="main" @mouseenter="Mouseenter" @mouseleave="Mouseleave">
        <a href="https:/bilibili.com">
            <img :src="data[selectedButtonId].path" height="380" /></a>

        <div class="mid" :style="{ backgroundColor: bottomcolor }">
            <div class="mid_left">
                <el-link :underline="false">
                    <el-text style="color: white; font-size: larger; font-weight: 700; " line-clamp="1">
                        {{ data[selectedButtonId].title }}
                    </el-text>
                </el-link>

                <el-button link size="large"> <span color="white"></span></el-button>
            </div>
            <div class="mid_right">
                <el-button type="info" class="nav_arrowbtn" @click="movepre(false)">
                    <el-icon color="white">
                        <ArrowLeftBold />
                    </el-icon>
                </el-button>
                <el-button class="nav_arrowbtn" @click="movenext(false)">
                    <el-icon color="white">
                        <ArrowRightBold />
                    </el-icon>
                </el-button>
            </div>
        </div>
        <div class="bottom" :style="{ backgroundColor: bottomcolor }">
            <button class="nav_cirbtn" :class="{ 'selected': item.id === selectedButtonId }" v-for=" item in data "
                @click="change_id(item.id)">
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">

import { fa } from 'element-plus/lib/locale/index.js';
import { ref, computed } from 'vue';
const data = [{ id: 0, path: '/bilibili/1.png', title: "又见证历史了？！", bottom_color: "#414a14" },
{ id: 1, path: "/bilibili/2.png", title: "7.2预下载开启，欢迎来到新艾丽都！", bottom_color: "#282d48" },
{ id: 2, path: "/bilibili/3.png", title: "小狗不许上床", bottom_color: "#544132" },
{ id: 3, path: "/bilibili/4.png", title: "复活吧！艾尔登法贼！", bottom_color: "#272517" },
{ id: 4, path: "/bilibili/5.png", title: "这也太细节了吧", bottom_color: "#2c1e11" },
{ id: 5, path: "/bilibili/6.png", title: "小片片说大片 x 倪虹洁 白玉兰电视节幕后独家专访", bottom_color: "#6b3d27" }]
// 控制是否自动翻页
let ishover = false;

const Mouseenter = () => {
    ishover = true;
}
const Mouseleave = () => {
    ishover = false;
}
let selectedButtonId = ref(0);
const data_length = data.length;
let change_time: Date = new Date();
let curImg = computed(() => {
    return data[selectedButtonId.value].path;
});
let bottomcolor = computed(() => {
    return data[selectedButtonId.value].bottom_color;
});

const movenext = (flag: boolean) => {
    if (!flag) {
        change_time = new Date();
    }
    selectedButtonId.value = (selectedButtonId.value + 1) % data_length;
}
const movepre = (flag: boolean) => {
    if (!flag) {
        change_time = new Date();
    }
    selectedButtonId.value = (selectedButtonId.value - 1) < 0 ? data_length - 1 : selectedButtonId.value - 1;
}

const change_id = (val: number) => {
    change_time = new Date();
    selectedButtonId.value = val;
}

setInterval(() => {
    if (!ishover) {
        const endtime = new Date();
        // 获取两个时间点的毫秒数
        const diffMilliseconds = endtime.getTime() - change_time.getTime();
        // 将毫秒数转换为秒数
        const diffSeconds = diffMilliseconds / 1000;
        if (diffSeconds > 3) {
            movenext(true);
        }
    }
}, 3000)

</script>
<script lang="ts">
export default {
    name: "LeftNav"
}
</script>

<style scoped>
.main {
    grid-row: 1/3;
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    max-width: 860px;
}

.mid {
    display: flex;
    justify-content: space-between;
    background-color: #272517;
    padding: 0 20px;
}

.mid_right {
    display: flex;
    flex-wrap: nowrap;
}

.nav_arrowbtn {
    border-radius: 5px;
    width: 25px;
    background-color: rgb(58, 57, 57);
    border-color: rgb(58, 57, 57);
    border-width: 0.1;
    opacity: 60%;
}


.nav_arrowbtn:hover {
    background-color: gray;
    opacity: 80%;
}

.bottom {
    display: flex;
    background-color: #272517;
    /* align-items: center; */
    height: 30px;
    padding: 5px 20px;
    border-radius: 0 0 5px 5px;
}

.nav_cirbtn {
    width: 8px;
    /* 设置按钮宽度 */
    height: 8px;
    /* 设置按钮高度 */
    border-radius: 50%;
    /* 将按钮边框半径设置为宽度和高度的一半，使其呈现圆形 */
    background-color: white;
    /* 设置背景颜色 */
    margin: 0 4px;
    opacity: 50%;
    transition: transform 0.2s ease-in-out;
}

.nav_cirbtn.selected {
    transform: scale(1.4);
    /* 放大1.2倍 */
    transform-origin: center;
    /* 从中心点开始放大 */

    /* 设置背景颜色 */
    margin: 0 2px;
    opacity: 100%;

}

img {
    animation: slideInFromLeft 1s ease-in-out forwards
}

/* 定义从左向右滑入的动画 */
@keyframes slideInFromLeft {
    from {
        left: -100%;
    }

    to {
        left: 0;
    }
}
</style>