import {combineReducers} from 'redux';

import zipReducer from './ZipReducer';

export default combineReducers({
  zip: zipReducer,
});
