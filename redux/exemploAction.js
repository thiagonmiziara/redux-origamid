/*const button = document.querySelector('#button');
button.addEventListener('click', () => {
    store.dispatch(incrementar());
    //para verificar se esta incremetando e so no console do navegador 
    // chamar store.getState();
});

//Para evitar bugs sempre colocar o Type em constantes
const INCREMENTAR = "INCREMENTAR";
const SOMAR = "SOMAR";

const initialState = 10;

// Exemplos de action creator

function incrementar() {
    return { type: INCREMENTAR };
}

function somar() {
    return { type: SOMAR, payload: 25 };
}

/////////////////////////////////////////////////////
function reducer(state = initialState, action) {
    //exemplo sem payload
    if (action.type === INCREMENTAR) {
        return state + 1;
    }
    // exemplo com payload
    if (action.type === SOMAR) {
        return state + action.payload;
    }
    return state;
}

const store = Redux.createStore(reducer);
let state = store.getState();
console.log(state);

//para pegar o novo valor tem que ativar a função getState novamente

//exemplo com payload
store.dispatch({ type: SOMAR, payload: 25 }); // exemplo sem function action
store.dispatch(somar()); // exemplo com function action
state = store.getState();
console.log(state);

//exemplo sem payload
store.dispatch({ type: INCREMENTAR }); // exemplo sem function action
store.dispatch(incrementar()); // exemplo com function action 
state = store.getState();
console.log(state);
*/