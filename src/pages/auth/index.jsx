import {auth, provider} from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"

export const Auth = () => {

    const signInWithGoogle = async () => { 
        const results = signInWithPopup(auth, provider)
        console.log(results)
    }

    return (
    <div className="login-page"> 
        <p>Sign in With Google to Continue</p>
        <button className="login-with-google" onClick={signInWithGoogle}>
            {" "}
            Sign in with Google
        </button>
    </div>
    )
}