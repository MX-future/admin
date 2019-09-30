import { combineReducers } from 'redux-immutable';  //将state变为immutable类型
import { reducer as panelReducer } from '../common/editpanel/store/index';
import { reducer as tableReducer } from '../pages/manaArticle/components/store/index';
import { reducer as writeReducer } from '../pages/writeArticle/store/index';
import { reducer as loginReducer } from '../pages/login/store/index';

const reducer =  combineReducers({
    editpanel: panelReducer,
    showtable: tableReducer,
    write: writeReducer,
    login: loginReducer
});

export default reducer;