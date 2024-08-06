import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // Perform login success actions here
    onLoginSuccess(true); // Assuming login is successful
  };

  const handleFailure = (response) => {
    console.error('Login Failed:', response);
  };

  
  return (
    <GoogleOAuthProvider clientId="1075116663954-4jvgodm3frj84bq3nn7tj9l95hi0cl4b.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
