function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // User is logged in, get and use the access token
      var accessToken = response.authResponse.accessToken;
      // Perform necessary actions, e.g., send the token to your server for authentication
    } else {
      // User is not logged in or has revoked permission
    }
  });
}
