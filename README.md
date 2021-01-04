Single SPA Test
==================

Welcome to Single SPA Test, a full functional [React][1] application using [Single-SPA][2].

This document contains information for use this app

1) Main explanations
----------------------------------

This app was created using two standalone React apps, but for the example both of them are stored in the same
root directory. Btw, the core logic is isolated in src's main directory

2) Apps configurations
----------------------------------

Inside app-alpha (and app-beta) install all the node_modules using [Npm][3]:

    npm install

3) Run the apps
----------------------------------

Inside app-alpha and app-beta, run:

    npm run start

The ports for the apps are 8080 for alpha and 5000 for beta

Finally, run again (but in the root directory)
    
    npm run start


4) Enjoy
----------------------------------

The apps will be running in [http://localhost:9000][4]

For see app-alpha, go to [http://localhost:9000/app-alpha][5] (the same for beta)

[1]: https://es.reactjs.org/
[2]: https://single-spa.js.org/
[3]: http://blog.npmjs.org/post/85484771375/how-to-install-npm
[4]: http://localhost:9000
[5]: http://localhost:9000/app-alpha
