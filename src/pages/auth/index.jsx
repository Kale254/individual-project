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

      <footer className="footer">
        <div className="footer-content">
          <p>Contact Us</p>
          <p>
            <a href="https://x.com/wetjenkale/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            |{" "}
            <a href="https://instagram.com/2kale3/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="mailto:kdwetjen@icloud.com">kdwetjen@icloud.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
