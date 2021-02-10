const button = document.querySelector("#button");
button.addEventListener("click", () => {
    store.dispatch(incrementar());
    //para verificar se esta incremetando e so no console do navegador
    // chamar store.getState();
});

const abrir = document.querySelector("#abrir");
const fechar = document.querySelector("#fechar");

abrir.addEventListener('click', () => {
    store.dispatch({ type: 'ABRIR' })
})

fechar.addEventListener('click', () => {
    store.dispatch({ type: 'FECHAR' })
})



//Para evitar bugs sempre colocar o Type em constantes
const INCREMENTAR = "INCREMENTAR";
const SOMAR = "SOMAR";

const initialState = 0;

// Exemplos de action creator

function incrementar() {
    return { type: INCREMENTAR };
}

function somar() {
    return { type: SOMAR, payload: 25 };
}

/////////////////////////////////////////////////////
function contador(state = initialState, action) {
    /* //exemplo sem payload
       if (action.type === INCREMENTAR) {
           return state + 1;
       }
       // exemplo com payload
       if (action.type === SOMAR) {
           return state + action.payload;
       }*/

    //exemplo com switch case
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case SOMAR:
            return state + action.payload;
        default:
            return state;
    }
}

function modal(state = false, action) {

    switch (action.type) {
        case "ABRIR":
            return true;
        case "FECHAR":
            return false
        default:
            return state;
    }
}

const reducer = Redux.combineReducers({ contador, modal })

const store = Redux.createStore(reducer);

function render() {
    const state = store.getState();

    const total = document.getElementById("total");
    total.innerText = state.contador;
    if (state.modal) {
        total.style.display = 'inline-block'
    } else {
        { total.style.display = 'none' }
    }
}
render();

const unsubscribe = store.subscribe(render);
store.subscribe(render);
store.dispatch(somar());
unsubscribe(); //não deixa atualizar a pagina