# Threejs-Demo

Built with React Router (framework mode), Zustand and Three.js. To run, execute:
`npm run dev`.

## Future work and improvements

Please note that the login page is only a proof-of-concept and does not follow good
security practices. The email and password defined as environment variables are
currently reflected in the resulting JS build. However, this was a little beyond
the scope of this exercise as no custom data, personal or otherwise, is protected by the
login screen. For a real system, username and password checking needs to happen on the
server while passwords need to be hashed. Otherwise, SSO or passwordless-logins may be
setup in order to provide a better user experience.
