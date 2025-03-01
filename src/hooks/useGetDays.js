import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import {db} from "../config/firebase.config";
import { useState, useEffect } from "react"
import {useGetUserInfo} from "./useGetUserInfo"
export const useGetDays = () => {
    const [days, setDays] = useState([])

     const daysCollectionRef = collection(db, "days")
     const {userID} = useGetUserInfo()

    const getDays = async () => {
        let unsubscribe
        try {
            const queryDays = query(
                daysCollectionRef, 
                where("userID", "==", userID),
                orderBy("createdAt")
            )

             unsubscribe = onSnapshot(queryDays, (snapshot) => {

                let docs = []

                snapshot.forEach((doc) => {
                    const data = doc.data()
                    const id = doc.id

                    docs.push({...data, id})
                })

                setDays(docs)
            }) 

        } catch (err) {
            console.error(err)
        }

        return () => unsubscribe()
    }

    useEffect(() => {
        getDays()
    }, [])

    return {days}
}