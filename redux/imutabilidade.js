const array1 = [0, 1, 2, 3, 4]
const array2 = [...array1]

const obj1 = {
    time: 'flamengo',
    apelido: 'mengão'
}

/* exemplo com immer
const obj2 = immer.produce(obj1, (draft) => {
    draft.apelido = 'Campeão'
})
console.log(obj2);
*/

//obj sem immer

const obj2 = Object.assign({}, obj1, { time: 'Campeão' });
console.log(obj1);
console.log(obj2);

const initialState = {
    nome: "Thiago",
    idade: 33
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'MUDAR_NOME':
            state.nome = action.payload;
            return {...state, nome: action.payload };
        default:
            return state;
    }
}

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.dispatch({ type: 'MUDAR_NOME', payload: "Flamengo" });