import {defineStore} from "pinia";
import axios from "axios";

const methodName = '/ambulance/places/location/default'
// const methodName = '/ambulance/dictionaries/reason-type'
export const useCallcardStore = defineStore("callCardStores", {
    state: () => {
        return {
            list: [],
            currentElement:null
        }
    },
    actions: {
        async getAll(params) {
            let res = await getAll(params)
            if (res.data) this.list = res.data.content
            return res
        }
    }
})