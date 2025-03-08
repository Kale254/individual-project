import { auth, provider } from "../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css"

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  if (isAuth) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Sign In</h2>
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
