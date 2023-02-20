import { combineReducers } from '@reduxjs/toolkit';
import tagsViewReducer from './tags-view.store';
import cardData from './card';



const rootReducer = combineReducers({
  tagsView: tagsViewReducer,
  tagsView: cardData,

});

export default rootReducer;
