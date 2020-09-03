import {combineReducers} from 'redux';
import tasks from './tasks';
import front from './front';
import modal from './modal';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  tasks,
  front,
  modal,
  form: formReducer
});

export default rootReducer;
