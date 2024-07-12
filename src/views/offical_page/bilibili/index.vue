<template>
    <div class="bilibili">
        <div class="contain_top">
            <Tabbar />
            <div style="padding-left: 125px; ">
                <a href="https://www.bilibili.com">
                    <svg_Y name="bilibililogo" width="100" height="100">
                    </svg_Y>
                </a>
            </div>
        </div>
        <main class="main_container">
            <TabbarSec />
            <Content>

            </Content>

        </main>

        <!-- <div class="test">
            <el-button class="item"
                v-for="item in [1, 234, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1]">
                {{ item }}
            </el-button>
        </div> -->

    </div>
</template>

<script setup lang="ts">
import Tabbar from './tabbar/index.vue';
import TabbarSec from './tabbar_sec/index.vue';
import Content from './content/index.vue';

</script>
<script lang="ts">
export default {
    name: "bilibili"
}

</script>

<style scoped>
.contain_top {
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 100vw;
    overflow: hidden;
    background: url('@/assets/imgs/login_img.png') no-repeat;
}

.main_container {
    position: relative;
    width: 85vw;
    min-width: 1600px;
}

.bilibili {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.test {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 90vw;
    gap: 10px;
}


.test .item:nth-child(1) {
    margin-left: 12px
}
</style>