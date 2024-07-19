<template>
    <div class="main_contain">
        <div class="refresh">
            <el-button class="btn" color="gray">
                <div style="display: flex; flex-direction: column;">
                    <svg_Y class="svg_refresh" name="refresh" width="20px" color="#525255"></svg_Y>
                    <span>换</span>
                    <span>一</span>
                    <span>换</span>
                </div>
            </el-button>
        </div>
        <LeftNav></LeftNav>

        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
        <Bilibili_Video></Bilibili_Video>
    </div>

</template>

<script setup lang="ts">
import LeftNav from './left_nav/index.vue';
import Bilibili_Video from './comp_video/index.vue';


</script>
<script lang="ts">
export default {
    name: "Content"
}
</script>

<style scoped>
* {
    margin: 0;
}

.main_contain {
    width: 85vw;
    min-width: 1590px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    /* background-color: aquamarine; */
    gap: 20px;
}

.grid_test {
    display: grid;

}

span {
    font-family: sans-serif;
    font-size: small
}

.refresh {
    position: absolute;
    top: 0;
    right: -45px;
}

.flex_test {
    display: flex;
    flex-direction: column;

}

.btn {
    height: auto;
    width: 30px;
    border-radius: 5px;
    background-color: white;
    border-color: #e3e5e7;
}

.btn:hover {
    background-color: #e3e5e7;
}

.btn:hover .svg_refresh {
    rotate: 360deg;
}

.svg_refresh {
    rotate: 0;
    transition: rotate 0.8s ease-in-out;
}
</style>