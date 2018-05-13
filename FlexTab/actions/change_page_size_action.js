import {createAction} from 'redux-actions'; 

import {
    CHANGE_PAGE_SIZE
} from '../constants/action_type';


export const CHANGE_PAGE_SIZE_ACTION = createAction(CHANGE_PAGE_SIZE);