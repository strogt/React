// 账单列表相关的store
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken,removeToken } from "@/utils";
import { longinAPI,getProfileAPI} from "@/api/user";

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || "",
        userInfo: {},
    },
    reducers: {
        setToken: (state,action) => {
            state.token = action.payload
            // 同步到本地
            _setToken(action.payload)
        }, 
        setUserInfo: (state,action) => {
            state.userInfo = action.payload
        }, 
        clearLoginInfo: (state)=> {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})


const { setToken, setUserInfo, clearLoginInfo } = userStore.actions

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await longinAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin,fetchUserInfo,setToken,clearLoginInfo }

const reducer = userStore.reducer
export default reducer