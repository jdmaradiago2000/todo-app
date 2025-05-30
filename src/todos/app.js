

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //Esta función autoinvocada se ejecuta cuando la funcion App() es llamada.
    (() => {
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola Mundo</h1>';
        document.querySelector(elementId).append(app);
    }) ();
}