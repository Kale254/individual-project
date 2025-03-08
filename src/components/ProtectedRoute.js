import React from 'react';
import { Navigate} from 'react-router-dom';
import { auth } from '../config/firebase.config';

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default ProtectedRoute;
