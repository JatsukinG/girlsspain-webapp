import {atom} from "recoil";
import {localStorageEffect} from "@/atoms";
import {INFO_USER} from "@auth/constants";


const informationMeState = atom({
    key: 'informationMeState',
    default: undefined,
    effects: [
        localStorageEffect(INFO_USER),
    ],
})

export default informationMeState;