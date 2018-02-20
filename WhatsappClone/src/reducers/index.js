import { combineReducers } from 'redux';

import AutheticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListConversationReducer from './ListConversationReducer';

export default combineReducers({
     AutheticationReducer,
     AppReducer,
     ListContactsReducer,
     ListConversationReducer
});
