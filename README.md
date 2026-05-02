# Threejs-Demo

Built with React Router (framework mode), Zustand and Three.js. To run, execute:
`npm run dev`.

Please note that this app is deployed on https://threejs-demo-psi.vercel.app/ and accessible
through the following credentials:

- Email: **admin@example.com**
- Password: **Admin123!**

## Future work and improvements

Please note that the login page is only a proof-of-concept and does not follow good
security practices. The email and password defined as environment variables
(`VITE_LOGIN_EMAIL` and `VITE_LOGIN_PASSWORD` respectively) are currently exposed in the
resulting JS build. However, this was a little beyond the scope of this exercise as no
custom data, personal or otherwise, is protected by the login screen. In a real system,
username and password checking needs to happen on the server while passwords need to be
hashed. Otherwise, SSO or passwordless-logins may be setup in order to provide a better
and more modern user experience, as well as aleviating ourselves from the responsability
of password management.
