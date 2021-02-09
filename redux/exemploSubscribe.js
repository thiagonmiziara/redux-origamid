const button = document.querySelector("#button");
button.addEventListener("click", () => {
    store.dispatch(incrementar());
    //para verificar se esta incremetando e so no console do navegador
    // chamar store.getState();
});

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

function render() {
    const state = store.getState();

    const total = document.getElementById("total");
    total.innerText = state;
}
render();

const unsubscribe = store.subscribe(render);
store.dispatch(somar());
unsubscribe() //não deixa atualizar a pagina