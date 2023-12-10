import React, { useEffect, useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/.auth/me');
        const user = await response.json();
        setUserInfo(user);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>Azure Static Web Apps custom roles demo</h1>
      <div>
        <a href="/.auth/login/aad">Login</a> | <a href="/.auth/logout">Logout</a>
      </div>
      {userInfo && (
        <div>
          Hello {userInfo.clientPrincipal && userInfo.clientPrincipal.userDetails}
        </div>
      )}
    </div>
  );
}

export default App;
