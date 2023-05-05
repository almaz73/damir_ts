import {defineStore} from "pinia";

export const useStaffStore = defineStore("staffStore", {
    state: () => ({
        staffs: [{id: 0, name: '1111'},
            {id: 1, name: '2222'}]
    })
})
