<template>
    <div class="main" @mouseenter="btn_more_vis = 'visible'" @mouseleave="btn_more_vis = 'hidden'">
        <div class="top_video">
            <a href="https:/www.bilibili.com">
                <video class="comp_video" style="border-radius: 5px; overflow: hidden;" ref="myvideo" muted
                    @mouseenter="MouseEnter" @mouseleave="MouseLeave">
                    <source :src="videoUrl" type="video/mp4">
                </video>
            </a>
            <div v-show="!video_msg_show" class="video_topright" @mouseenter="ReplayMouseEnter"
                @mouseleave="ReplayMouseLeave">
                <el-button link>
                    <svg_Y name="replay" width="25px" height="25px"></svg_Y>
                </el-button>
            </div>
            <div class="video_bottom" :class="{ ishover: video_msg_show }">
                <div class="video_bottom_left" style="display: flex; align-items: center; gap: 5px;">
                    <svg_Y name="play" width="15px" height="15px"> </svg_Y>
                    <span style="color: white; font-size: small;"> {{ playnum }}</span>
                    <svg_Y style="margin-left: 5px;" name="remark" width="20px" height="20px"> </svg_Y>
                    <span style="color: white;font-size: small;"> {{ remarknum }}</span>
                </div>
                <div>
                    <span style="color: white;font-size: small;"> {{ totaltime }}</span>
                </div>
            </div>
        </div>

        <div style="display: flex; justify-content: space-between;   align-items: flex-start;  ">
            <el-link class="titlelink" :underline="false">
                <el-text class="title_container" line-clamp="2">
                    {{ title }}
                </el-text>
            </el-link>
            <el-popover popper-class="custom-popover" class="el_popover" trigger="hover" :show-arrow=false
                placement="bottom-end" :show-after=300>
                <template #reference>
                    <button class="btn_more" :style="{ visibility: btn_more_vis }">
                        <svg_Y name="more" width="15px">
                        </svg_Y>
                    </button>
                </template>
                <div class="popup">
                    <button>
                        <span> 内容不感兴趣</span>
                    </button>
                    <button>
                        <span> 不想看此UP主</span>
                    </button>
                </div>
            </el-popover>
        </div>
        <div class="bottom" style="padding-left: 2px;">
            <el-link class="bottomlink" :underline="false">
                <el-text class="title_container" line-clamp="1">
                    {{ name }}
                </el-text></el-link>
        </div>

    </div>
</template>

<script setup lang="ts">
import { tr } from 'element-plus/es/locales.mjs';
import { onMounted, ref } from 'vue';

defineProps({
    videoUrl: {
        type: String,
        default: "/video/test1.mp4"
    },
    title: {
        type: String,
        default: "封神炸裂作画！来一睹近几年大师级的坠落飞行作画。"
    },
    icon: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: "up主"
    },
    totaltime: {
        type: String,
        default: "00:00"
    },
    playnum: {
        type: Number,
        default: 0
    },
    remarknum: {
        type: Number,
        default: 0
    }
});
const myvideo = ref(null);
//控制视频信息的显隐
let video_msg_show = ref(true);
let replay_hover = ref(false);
let btn_more_vis = ref<string>("hidden");

const MouseEnter = () => {

    video_msg_show.value = false;
    myvideo.value && myvideo.value.play();

}
const MouseLeave = () => {

    video_msg_show.value = true;
    myvideo.value && myvideo.value.pause();

}
const ReplayMouseEnter = () => {
    replay_hover.value = true;
}
const ReplayMouseLeave = () => {
    replay_hover.value = false;
}
</script>
<script lang="ts">
export default {
    name: "Bilibili_Video"
}

</script>

<style scoped>
.video_topright {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    background-color: black;
    border-radius: 20%;
    opacity: 50%;
}

.video_topright:hover {}

.popup {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

}

button {
    padding: 10px 0;
}

button:hover {
    background-color: #f1f2f3;
}

span {
    padding: auto;
    color: gray;
}

.btn_more {
    padding: 0;
}

.btn_more:hover {
    background-color: #e9eaeb;
    border-radius: 20%;
}

.main {
    /* position: relative; */
    /* width: 330px; */
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    /* background-color: green; */
}

.top_video {
    position: relative;
}

.comp_video {
    /* width: 100%; */
    position: relative;
    object-fit: cover;
    /* 视频保持原始宽高比并填充容器 */
}

.video_bottom {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0px;
    /* background-image: linear-gradient(to top, black, white); */
    /* background-color: black; */

    padding: 8px;
    z-index: 100;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

}

.video_bottom.ishover {

    opacity: 100%;
}

.title_container {
    flex-grow: 0.8;
    color: black;
}

.title_container:hover {
    color: #409eff;
}

.titlelink {
    padding: 0 10px 0 2px;
}

.titlelink .title_container {
    font-size: 40;
    font-weight: 545;
    font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}
</style>