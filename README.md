![Libreta](https://user-images.githubusercontent.com/76847923/225368991-8323a897-b443-41b5-ab2e-e538f99e72ae.gif)

Pequeño proyecto de una libreta para escribir notas. Realizada con React y Electron.

## To start

1. npm install
2. npm run start (start the server)
3. npm run electron (start electron)

## To build

0. Create the build => npm run build
1. Change the main from the package json from the folder public to build
2. Add a './' in the href of the stylesheet and the src of the script tag
3. Change the process.env.NODE_ENV of the electron.js to production
4. Execute npm run package
