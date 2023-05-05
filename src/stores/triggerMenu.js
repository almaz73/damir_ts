import{defineStore} from "pinia";

export const useTriggerMenu = defineStore('triggerMenu', {
    state:()=>{
        return{
            show: false
        }
    }
})
