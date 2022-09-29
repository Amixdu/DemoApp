import Keycloak from "keycloak-js";

const keycloak = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
*/
const initKeycloak = (onAuthenticatedCallback) => {
    keycloak.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
    })
    .then((authenticated) => {
        if (!authenticated) {
            console.log("user is not authenticated..!");
        }
        else{
            onAuthenticatedCallback();
        }
    })
    .catch(console.error);
};

const login = keycloak.login;
const logout = keycloak.logout;

const UserService = {
    initKeycloak,
    login,
    logout,
};

export default UserService;