import { request } from "@/utils"

export const longinAPI = (data) => {
    return request({
        url: "/authorizations",
        method: "POST",
        data
    })
}


export const getProfileAPI = () => {
    return request({
        url: "/user/profile",
        method: "GET",
    })
}