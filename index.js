import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import puzzleSolverApp from './reducers';
import App from './components/App';
import _ from 'lodash';

var boxes = [],
  colors = ['blue', 'green', 'red', 'orange'];

//Generate the 8 boxes
for (var i = 1; i < 9; ++i) {
    boxes.push({
        key: i,
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
//   boxes.push(
//     <Box key={i} number={i} color={colors[Math.floor(Math.random() * colors.length)]} />
//   );
}
//Generate the final empty box
boxes.push({
    key: 9,
    id: ' ',
    color: colors[Math.floor(Math.random() * colors.length)]
});
//Shuffle them
boxes = _.shuffle(boxes);

let store = createStore(puzzleSolverApp, boxes);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
        console.log(store.getState());
});
// store.dispatch({
//     type: 'INCREMENT',
//     boxId: 3
// })
// store.dispatch({
//     type: 'INCREMENT',
//     boxId: 3
// })
// store.dispatch({
//     type: 'DECREMENT',
//     boxId: 3
// })
// store.dispatch({
//     type: 'INCREMENT',
//     boxId: 3
// })