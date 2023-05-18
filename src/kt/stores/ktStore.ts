import {defineStore} from "pinia";
import axios from 'axios';
import kt from "@/develop/KT387602"; // заглушка

export const useKtStore = defineStore('ktStore', {
    state: () => {
        return {
            kt: kt,
            showMap: false,
            showLeftMenu: false, // скрытие/показ левого меню при узком экране
            modalName: ''
        }
    },
    actions: {
        openModal(name: string): void {
            this.modalName = name
        },
        async getDefaultLocation() {
            let res = await getDefaultLocation()
            return res ? res.data : []
        },
        async getAddressChilds(objectId: number) {
            let res = await getAddressChilds(objectId)
            return res ? res.data : []
        },
        async getFullPathLocation(objectId: number) {
            let res = await getFullPathLocation(objectId)
            return res ? res.data : []
        },
        async searchAddress(contains: string, aoId: number, abortController: any) {
            let res = await searchAddress(contains, aoId, abortController)
            return res ? res.data : []
        },
        async getCallPlaces() {
            let res = await getCallPlaces()
            return res ? res.data : []
        },
        async getCurrentRegion() {
            let res = await getCurrentRegion()
            return res ? res.data : []
        },
        async getRegions() {
            let res = await getRegions()
            return res ? res.data : []
        },
        async getMOs(id: number) {
            let res = await getMOs(id)
            return res ? res.data : []
        },
        async getCurrentMO() {
            let res = await getCurrentMO()
            return res ? res.data : []
        },
        async getNPs(id: number) {
            let res = await getNPs(id)
            return res ? res.data : []
        },
        async getStreets(id: number) {
            let res = await getStreets(id)
            return res ? res.data : []
        },
        async getHouses(id: number) {
            let res = await getHouses(id)
            return res ? res.data : []
        }

    }
})


function getDefaultLocation() {
    return axios.get('/ambulance/places/location/default')
        .then(res => res)
}

function getAddressChilds(objectId: number) {
    return axios.get(`/ambulance/places/location/${objectId}/childs`)
        .then(res => res)
}

function getFullPathLocation(objectId: number) {
    return axios.get(`/ambulance/places/location/${objectId}/path`)
        .then(res => res)
}


function searchAddress(contains: string, aoId: number, abortController: any) {
    return axios.get(`/ambulance/places/search`, {
        params: {contains, aoId},
        signal: abortController.signal
    }).then(res => res)
}

function getCallPlaces() {
    return axios.get('ambulance/dictionaries/genericDict/CallPlace?showArchived=true')
        .then((res: Object) => res)
}

function getCurrentRegion() {
    return axios.get('ambulance/places/location/current/region')
        .then((res: Object) => res)
}

function getRegions() {
    return axios.get('ambulance/places/location')
        .then((res: Object) => res)
}

function getMOs(id: number) {
    if (!id) debugger
    return axios.get(`ambulance/places/location/${id}/mo`)
        .then((res: Object) => res)
}

function getCurrentMO() {
    return axios.get('ambulance/places/location/current/mo')
        .then((res: Object) => res)
}

function getNPs(id: number) {
    return axios.get(`ambulance/places/location/${id}/np`)
        .then((res: Object) => res)
}

function getStreets(id: number) {
    return axios.get(`ambulance/places/location/${id}/streets`)
        .then((res: Object) => res)
}

function getHouses(id: number) {
    return axios.get(`ambulance/places/location/${id}/houses`)
        .then((res: Object) => res)
}

