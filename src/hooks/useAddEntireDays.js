import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db} from '../config/firebase.config'
import { useGetUserInfo } from "./useGetUserInfo"
export const useAddEntireDays = () => {
    const daysCollectionRef = collection(db, "entireDays")
    const {userID} = useGetUserInfo()

    const addEntireDays = async ({
        daysStart, 
        daysEnd
    }) => {
        await addDoc(daysCollectionRef, {
            userID,
            daysStart,
            daysEnd,
            createdAt: serverTimestamp()
        })
    }
    return {addEntireDays}
}