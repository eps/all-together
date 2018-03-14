import { combineReducers } from 'redux';

import websites from './websites';
import selected from './selected';

const rootReducer = combineReducers({websites, selected})

export default rootReducer;
