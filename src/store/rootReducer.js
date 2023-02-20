import { combineReducers } from '@reduxjs/toolkit';
import tagsViewReducer from './tags-view.store';
import cardData from './card.store';

const rootReducer = combineReducers({
  tagsView: tagsViewReducer,
  card: cardData,

});

export default rootReducer;
