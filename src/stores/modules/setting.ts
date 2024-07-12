import { defineStore } from "pinia";
import { ref } from "vue";
let useLayoutSettingStore = defineStore('SettingStore', () => {
    let fold = ref(true);
    const changefold = () => {
        fold.value = !fold.value;
        console.log(fold.value);
    }
    let refresh = ref(true);
    const Refresh = () => {
        refresh.value = !refresh.value;
        console.log('刷新');
    }
    return { fold, changefold, refresh, Refresh };
})
export default useLayoutSettingStore;