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
            let res = getAll(params)
            if (res.data) this.list = res.data.content
            return res
        }
    }
})

function getAll(params) {
    let url = methodName;
    if (params && params.linesPerPage) url += '?size=' + params.linesPerPage + '&page=' + params.page
    return axios.get(url)
        .then(res => res, err => err)
}
