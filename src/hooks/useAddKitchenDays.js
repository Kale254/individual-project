import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db} from '../config/firebase.config'
import { useGetUserInfo } from "./useGetUserInfo"
export const useAddKitchenDays = () => {
    const daysCollectionRef = collection(db, "kitchenDays")
    const {userID} = useGetUserInfo()

    const addKitchenDays = async ({
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
    return {addKitchenDays}
}