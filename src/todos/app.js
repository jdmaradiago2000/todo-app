import html from './app.html?raw'
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //Esta función autoinvocada se ejecuta cuando la funcion App() es llamada.
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    }) ();
}