<template>
    <div class="main">
        <div class="contain_left">
            <el-button class="tabbar_btn" link>
                <svg_Y width="22" height="22" name="tv"></svg_Y>
                <span class="tabbar_txt" tag="b"> &nbsp;首页</span>
            </el-button>
            <el-button class="tabbar_btn" v-for="button in leftbuttons" :key="button" link>
                <span class="tabbar_txt_shake" tag="b">{{ button }}</span>
            </el-button>
            <el-button class="tabbar_btn" link>
                <svg_Y width="15" height="15" name="download"></svg_Y>
                <span class="tabbar_txt" tag="b">&nbsp;下载客户端</span>
            </el-button>
        </div>
        <div class="contain_mid">
            <input class="search_input" v-model="input_search" placeholder="Type something" />
            <el-button class="search_btn" icon="Search"></el-button>
        </div>
        <div class="contain_right">
            <div class="avatar">
                <el-avatar :size="40" src="https://empty">
                    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                </el-avatar>
            </div>
            <el-button class="tabbar_btn" v-for="button in right_buttons" :key="button.icon_name" link>
                <div class="container_rightbtn">
                    <svg_Y class="svg_right" width="20" height="20" :name="button.icon_name"></svg_Y>
                    <span class="tabbar_txt" tag="b" style="padding-top: 5px">{{ button.title }}</span>
                </div>
            </el-button>
            <el-popover placement="bottom-start" :width="400" trigger="hover" :show-arrow=false
                content="this is content, this is content, this is content">
                <template #reference>
                    <el-button color="#fb7299" style="border-radius: 10px; padding: 0 20px;">
                        <svg_Y name="upload" width="15" height="15" fill="white"></svg_Y>
                        <span class="tabbar_txt" tag="b">&nbsp;投稿</span>
                    </el-button>
                </template>
                <div class="tougaocontainer">
                    <button class="tabbar_btn" v-for="button in tougaobuttons" :key="button.icon_name" text>
                        <div class="contain_column">
                            <svg_Y class="svg_right" width="30" height="30" :name="button.icon_name"></svg_Y>
                            <span class="tabbar_txt" tag="b" style="margin-top:5px; color:gray;">{{
                                button.title
                                }}</span>
                        </div>
                    </button>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
let input_search = ref("");
const leftbuttons = ["番剧", "直播", "游戏中心", "会员购", "漫画", "赛事"]
const right_buttons = [{ icon_name: "vip", title: "大会员" }, { icon_name: "message", title: "消息" }, { icon_name: "dongtai", title: "动态" }, { icon_name: "shoucang", title: "收藏" }, { icon_name: "history", title: "历史" }, { icon_name: "create_center", title: "创作中心" }];
const tougaobuttons = [{ icon_name: "zhuanlan", title: "专栏投稿" }, { icon_name: "music", title: "音频投稿" }, { icon_name: "emo", title: "贴纸投稿" }, { icon_name: "video", title: "视频投稿" }, { icon_name: "manage", title: "投稿管理" }];
</script>
<script lang="ts">
export default {
    name: "Tabbar"
}

</script>

<style scoped lang="scss">
.main {
    height: 75px;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 30px;
    justify-content: space-between;
    align-items: flex-start
}

.contain_mid {
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
    background-color: white;
    height: 40px;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    opacity: 80%;
    min-width: 350px;
    max-width: 530px;
    margin-top: 15px;
}

.contain_column {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70px;
    width: 75px;

    border-radius: 5px;
    justify-content: center;
}

.contain_column:hover {
    background-color: #e3e5e7
}

.tougaocontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    // gap:10px;
}

.search_btn {
    border-width: 0;
}

.search_btn:hover {
    background-color: #e3e5e7;
    color: gray;
}

.tougaocontainer .tabbar_btn {

    height: 65px;
}

.contain_mid:hover {
    opacity: 100%;
}

.avatar {
    margin: 0 20px;
}

.contain_right {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 10px
}

.contain_left {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
    padding-top: 20px
}

span {
    text-rendering: optimizeLegibility;
    // font-weight: bold;
    font-size: large;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.tabbar_txt_shake {
    font-size: small;
    color: white;

}

.tabbar_btn:hover .tabbar_txt_shake {

    animation: shake 0.25s ease-in-out;
}

.tabbar_txt {
    color: white;
    font-size: small;

}

.search_input {

    border-width: 0;
    flex-grow: 0.95;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
}

.search_input:focus {

    border-width: 1;

    background-color: #e3e5e7;
}


.container_rightbtn {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.container_rightbtn:hover .svg_right {
    animation: shake 0.25s ease-in-out;
}

.svg_right {

    transition: transform 0.3s ease-out;
}

@media (max-width: 1600px) {
    .main {
        height: 90px;
        display: flex;
        flex-wrap: nowrap;
        padding: 0 20px;
        justify-content: space-between;
        align-items: flex-start
    }

    .contain_mid {
        display: flex;
        flex-wrap: nowrap;
        flex-grow: 1;
        background-color: white;
        height: 40px;
        border-radius: 10px;
        justify-content: space-around;
        align-items: center;
        opacity: 80%;
        min-width: 350px;
        max-width: 530px;
    }

    .tougaocontainer {
        display: flex;
    }

    .contain_mid:hover {
        opacity: 100%;
    }

    .avatar {
        padding-right: 20px;
    }

    .contain_right {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    .contain_left {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        padding-top: 20px
    }

    .tabbar_txt_shake {
        font-size: small;
        color: white;
    }

    .tabbar_btn:hover .tabbar_txt_shake {

        animation: shake 0.25s ease-in-out;
    }

    .tabbar_txt {
        color: white;
        font-size: small;
    }

    .search_input {

        border-width: 0;
        flex-grow: 0.95;
        height: 30px;
        border-radius: 5px;
        padding-left: 10px;
    }

    .search_input:focus {

        border-width: 1;

        background-color: #e3e5e7;
    }

    .contain_right .tabbar_txt {
        display: none;
    }

    .container_rightbtn {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .container_rightbtn:hover .svg_right {
        animation: shake 0.25s ease-in-out;
    }

    .svg_right {
        transition: transform 0.3s ease-out;
    }
}

@keyframes shake {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }

}
</style>