/*
 1、根据接口文档创建一个通用的泛型接口类型（多个接口返回值的结构是相似的）
 2、根据接口文档创建特有的接口数据类型（每个接口有自己的特殊的数据结构）
 3、组合1和2的类型，得到最终传给request泛型的参数类型
*/

import { http } from "../utils"
import type { ResType } from "./shared"

// 请求频道列表
export type ChannelItem = {
    id: number,
    name:string
}

type ChannelsRes = {
    channels: ChannelItem[]
}

export const fetchChnnelAPI = ()=>{
    return http.request<ResType<ChannelsRes>>({
        url:'/channels'
    })
}

// 请求lsit
export type ListItem = {
    art_id: string,
    title: string,
    aut_id:string,
    comm_count: number,
    pubadate: string,
    aut_name: string,
    is_top: string,
    cover:{
        type: number,
        images: string[]
    }
}

export type ListRes = {
    results: ListItem[],
    pre_timestamp: string,
}


type ListParams = {
    channel_id: string,
    timestamp: string
}

export const fetchListAPI = (params: ListParams)=>{
    return http.request<ResType<ListRes>>({
        url:'/articles',
        params
    })
}