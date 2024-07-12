<template>
    <div>

        <el-popover popper-class="pop" v-if="data.length > 0" trigger="hover" :show-arrow=false width="auto"
            :show-after=250 :placement="istop ? 'top' : 'bottom'">
            <template #reference>
                <div>
                    <el-button class="btn" color="#f6f7f8">
                        <el-text style="font-size: small; color: gray;">
                            {{ title }}
                        </el-text>
                        <el-icon class="icon_more" v-if="showmore"
                            style="font-size: 8px;margin: 7px  0 0 3px; color: gray;">
                            <ArrowDownBold />
                        </el-icon>

                    </el-button>
                </div>
            </template>
            <div class="container">
                <el-button class="btn1" color="#f6f7f8" v-for="item in data" :key="item.title"
                    style="text-align: left;">
                    <el-text style="font-size: small;color: black;">
                        {{ item.title }}
                    </el-text>
                </el-button>
            </div>
        </el-popover>
        <div v-else>
            <el-button class="btn" color="#f6f7f8">
                <el-text style="font-size: small; color: gray;">
                    {{ title }}
                </el-text>
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { More } from '@element-plus/icons-vue';
import { da } from 'element-plus/es/locales.mjs';


defineProps({
    data: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    istop: {
        type: Boolean
    },
    showmore: {
        type: Boolean
    }
})

</script>
<script lang="ts">
export default {
    name: "ButtonWithPop"
}
</script>

<style scoped>
.container {
    display: flex;
    /* gap: 5px; */
    flex-direction: column;
    /* justify-content: flex-end; */
    flex-wrap: wrap;
    /* overflow: hidden; */
    max-height: 150px;
}

.btn {
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
}

.btn:hover {
    background-color: #e1e3e5;

}

.btn1 {
    border-radius: 8px;
    border-width: 0;
    background-color: transparent;
}

.btn1:hover {
    background-color: #e1e3e5;

}

.btn1:nth-child(1) {
    margin-left: 12px;
}

.icon_more {
    transition: rotate 0.4s ease;
}

.btn:hover .icon_more {

    rotate: 180deg;
}
</style>