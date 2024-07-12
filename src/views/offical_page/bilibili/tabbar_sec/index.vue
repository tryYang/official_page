<template>
    <div class="main">
        <div class="left_container">
            <el-button v-for=" button in leftbuttons" :key="button.iconname" link>
                <div style="display: flex; flex-direction: column; justify-content: center;align-items: center;">
                    <svg_Y :name="button.iconname" width="46px" height="46px"> </svg_Y>
                    <span style="margin-top: 5px;"> {{ button.title }}</span>
                </div>
            </el-button>
        </div>
        <div class="mid_container">
            <ButtonWithPop class="sectab_btn" v-for="item in channel_data" :key="item.title" :data="item.data"
                :title="item.title" :istop=item.top :showmore=item.more />
        </div>
        <div class="right_container">
            <!-- <el-divider direction="vertical" height="50px" /> -->
            <el-button class="sectab_btn" v-for=" (button, index) in right_buttons" :key="button.iconname"
                style="border-width: 0; background-color: transparent;" @mouseenter="svghoverindex(index)"
                @mouseleave="svg_index = -1">
                <div style="display: flex; flex-direction: row; justify-content: center;align-items: center;">
                    <svg_Y class="icon_right" :name="button.iconname" width="20px" height="20px"
                        :color='svg_index === index ? " #00aeec" : "#61666d"'>
                    </svg_Y>
                    <span style=" padding: 5px 0 3px 3px"> {{ button.title }}</span>
                </div>
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonWithPop from "@/components/Button/popover/index.vue";
import { More } from "@element-plus/icons-vue";
import { id } from "element-plus/es/locales.mjs";
import { it } from "node:test";
import { ref } from 'vue'
const leftbuttons = [{ iconname: "dongtai2", title: "动态" }, { iconname: "hot", title: "热门" }];
const channel_data = [{ title: "番剧", top: true, data: [{ title: " 连载动画" }, { title: " 完结动画" }, { title: "咨讯" }, { title: "官方延伸" }, { title: "新番时间表" }, { title: "番剧索引" }] },
{ title: "国创", top: true, data: [{ title: " 国产动画" }, { title: " 国产原创相关" }, { title: "布袋戏" }, { title: "动态漫·广播剧" }, { title: "咨讯" }, { title: "新番时间表" }, { title: "国产动画索引" }] },
{ title: "综艺", top: true, data: [] },
{ title: "动画", top: true, data: [{ title: "MAD·AMV" }, { title: "MMD·3D" }, { title: "同人·手书" }, { title: "配音" }, { title: "模玩·周边" }, { title: "特摄" }, { title: "动漫杂谈" }, { title: "综合" }] },
{ title: "鬼畜", top: true, data: [{ title: "鬼畜调教" }, { title: "音MAD" }, { title: "人力VOCALOID" }, { title: "鬼畜剧场" }, { title: "教程演示" }] },
{ title: "舞蹈", top: true, data: [{ title: "宅舞" }, { title: "街舞" }, { title: "明星舞蹈" }, { title: "国风舞蹈" }, { title: "颜值·网红舞" }, { title: "舞蹈综合" }, { title: "舞蹈教程" }] },
{ title: "娱乐", top: true, data: [{ title: "娱乐杂谈" }, { title: "CP安利" }, { title: "颜值安利" }, { title: "娱乐粉丝创作" }, { title: "娱乐资讯" }, { title: "明星综合" }, { title: "综艺" }] },
{ title: "科技", top: true, data: [{ title: "数码" }, { title: "软件应用" }, { title: "计算机技术" }, { title: "科工机械" }, { title: "极客DIY" }] },
{ title: "美食", top: true, data: [{ title: "美食制作" }, { title: "美食侦探" }, { title: "美食测评" }, { title: "田园美食" }, { title: "美食记录" }] },
{ title: "汽车", top: true, data: [{ title: "汽车知识科普" }, { title: "购车攻略" }, { title: "新能源车" }, { title: "赛车" }, { title: "改装玩车" }, { title: "摩托车" }, { title: "房车" }, { title: "汽车生活" }] },
{ title: "运动", top: true, data: [{ title: "篮球" }, { title: "足球" }, { title: "健身" }, { title: "竞技体育" }, { title: "运动文化" }, { title: "运动综合" }] },
{ title: "VLOG", top: true, data: [] },
{ title: "电影", data: [], top: false },
{ title: "电视剧", data: [], top: false },
{ title: "纪录片", top: false, data: [] },
{ title: "游戏", top: false, data: [{ title: "单机游戏" }, { title: "电子竞技" }, { title: "手机游戏" }, { title: "网络游戏" }, { title: "桌游棋牌" }, { title: "GMV" }, { title: "音游" }, { title: "Mugen" }, { title: "游戏赛事" }] },
{ title: "音乐", top: false, data: [{ title: "原创音乐" }, { title: "音乐现场" }, { title: "翻唱" }, { title: "演奏" }, { title: "乐评盘点" }, { title: "VOCALOID·UTAU" }, { title: "MV" }, { title: "音乐粉丝饭拍" }, { title: "AI音乐" }, { title: "电台" }, { title: "音乐教学" }, { title: "音乐综合" }, { title: "说唱" }] },
{ title: "影视", top: false, data: [{ title: "影视杂谈" }, { title: "影视剪辑" }, { title: "影视整活" }, { title: "AI影像" }, { title: "预告·资讯" }, { title: "小剧场" }, { title: "短片" }, { title: "影视综合" }] },
{ title: "知识", top: false, data: [{ title: "科学科普" }, { title: "社科·法律·心理" }, { title: "人文历史" }, { title: "财经商业" }, { title: "校园生活" }, { title: "职业职场" }, { title: "设计·创意" }, { title: "野生技能协会" }] },
{ title: "资讯", top: false, data: [{ title: "热点" }, { title: "环球" }, { title: "社会" }, { title: "综合" }] },
{ title: "生活", top: false, data: [{ title: "搞笑" }, { title: "亲子" }, { title: "出行" }, { title: "三农" }, { title: "家居房产" }, { title: "手工" }, { title: "绘画" }, { title: "日常" }] },
{ title: "时尚", top: false, data: [{ title: "美妆护肤" }, { title: "仿妆cos" }, { title: "穿搭" }, { title: "时尚潮流" }] },
{ title: "动物圈", top: false, data: [{ title: "喵星人" }, { title: "汪星人" }, { title: "小宠异宠" }, { title: "野生动物" }, { title: "动物二创" }, { title: "动物综合" }] },
{ title: "更多", top: false, more: true, data: [{ title: "搞笑" }, { title: "单机游戏" }, { title: "虚拟UP主" }, { title: "公益" }, { title: "公开课" }] },
];
const right_buttons = [{ iconname: "content", title: "专栏" }, { iconname: "flag", title: "活动" }, { iconname: "community", title: "社区中心" }, { iconname: "realplay", title: "直播" }, { iconname: "smile_filled", title: "课堂" }, { iconname: "music_filled", title: "新歌热榜" }]
let ishover = ref(false);
let svg_index = ref(-1);

const svghoverindex = (idx: number) => {
    svg_index.value = idx;

};
</script>
<script lang="ts">
export default {
    name: "TabbarSec"
}
</script>

<style scoped>
.main {
    display: flex;
    margin: 30px 0;

}

.left_container {
    display: flex;
    gap: 10px;
    margin-right: 20px;
}

.mid_container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* 三列，每列平均分布 */
    grid-template-rows: auto auto;
    column-gap: 20px;
    row-gap: 5px;
    flex-grow: 1;
    justify-content: space-evenly;
    align-items: center;
    /* 两行，根据内容自动调整高度 */
}

.mid_container .sectab_btn:nth-last-child() {
    color: black;
}

.right_container .sectab_btn:nth-child(1) {
    margin-left: 12px;
}




.right_container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, auto);

    grid-template-rows: auto auto;

}

.right_container::after {
    position: absolute;
    content: "";
    background-color: gray;
    height: 100%;
    width: 1px;
    opacity: 30%;
    left: 12px;
}





.icon_right {

    transition: ease-in-out;
}

@media (max-width: 1600px) {

    .icon_right {
        display: none;
    }
}
</style>