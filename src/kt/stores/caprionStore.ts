import {defineStore} from "pinia";
import axios from 'axios';

export const useCaptionStore = defineStore('captionStore', {
    state: () => {
        return {}
    },
    actions: {
        async getReasonTypes() {
            let res = await getReasonTypes()
            return res ? res.data : []
        },


    }
})

function getReasonTypes() {
    return axios.get('/ambulance/dictionaries/reason-type')
        .then(res => res)
}


