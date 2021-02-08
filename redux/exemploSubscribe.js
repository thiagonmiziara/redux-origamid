const button = document.querySelector('#button');
button.addEventListener('click', () => store.dispatch(incrementar()));


function reducer(state = 0, action) {
    if (action.type === 'incrementar') {
        return state + 1;
    }
    if (action.type === 'reduzir') {
        return state - 1;
    }
    return state;
}
const store = Redux.createStore(reducer);

function render() {
    const total = document.getElementById('total');
    total.innerText = store.getState();
}
// Ativa a função render sempre que o dispatch ocorrer
store.subscribe(render);

store.dispatch({ type: 'incrementar' });
store.dispatch({ type: 'incrementar' });
store.dispatch({ type: 'incrementar' });
store.dispatch({ type: 'incrementar' });
store.dispatch({ type: 'reduzir' });

store.subscribe(render);
store.subscribe(() => {
    console.log('Atualizado');
});