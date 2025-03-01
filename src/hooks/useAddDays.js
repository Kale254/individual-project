import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db} from '../config/firebase.config'
import { useGetUserInfo } from "./useGetUserInfo"
export const useAddDays = () => {
    const daysCollectionRef = collection(db, "days")
    const {userID} = useGetUserInfo()

    const addDays = async ({
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
    return {addDays}
}