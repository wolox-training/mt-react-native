import { createStore } from 'redux';

import reducer from './game/reducers';

export const store = createStore(reducer);
