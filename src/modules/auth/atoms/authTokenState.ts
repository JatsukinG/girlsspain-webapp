import {atom} from "recoil";
import {localStorageEffect} from "@/atoms";
import {AUTH_TOKEN_KEY} from "@auth/constants";


const authTokenState = atom({
    key: 'authTokenState',
    default: undefined,
    effects: [
        localStorageEffect(AUTH_TOKEN_KEY),
    ],
})

export default authTokenState