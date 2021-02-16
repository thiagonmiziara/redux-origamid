const initialState = {
    nome: "Thiago",
    idade: 33
}

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case 'MUDAR_NOME':
            state.nome = action.payload
            break;
        case 'MUDAR_IDADE':
            state.idade = action.payload
            break;
    }
}, initialState);

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.dispatch({
    type: 'MUDAR_NOME',
    payload: "Flamengo"
});

store.dispatch({
    type: 'MUDAR_IDADE',
    payload: 2021
})