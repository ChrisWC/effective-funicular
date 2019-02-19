import {
  INITIALIZE_GRID,
  ITERATE_GRID_VALUES,
  GRID_CLEAR_STATE
} from '../actions/grid';

import iterateValues from "../utils/iterateGridValues";
import getFibsequence from "../utils/fibSequence";
import {getSubsequences} from "../utils/subSequence";

const grid = (state = { cells: [] }, action) => {
  switch (action.type) {
    case INITIALIZE_GRID:
      let cells = Array.from(
        {length: action.width*action.height},
        (x, index) => {
          let column = index % action.width;
          let row = (index/action.width) | 0; // x | 0 casts to int
          return {
            key: index,
            row,
            column,
            value: 0
          }
        }
      );

      return {
        cells: cells,
        width: action.width,
        height: action.height
      };
    case ITERATE_GRID_VALUES:
      let newCells = iterateValues(action.activeCell, [state.width, state.height], state.cells);

      let cellMax = newCells.reduce((u, v) => u.value > v.value? u:v);

      let seq = getSubsequences(newCells, [state.width, state.height], action.activeCell, 5, getFibsequence(cellMax.value));

      seq.forEach((s) => {
        s.forEach((v) => {
          newCells[v.key].fibNum = true;
        })
      });

      return {
        cells: newCells,
        width: state.width,
        height: state.height,
        last_activated: Date.now()
      };
    case GRID_CLEAR_STATE:
      // A grid clear state may be interrupted by a user
      // action in which case a grid clear state should
      // have no effect
      if ((Date.now() - state.last_activated) >= 1000) {
        return {
          ...state,
          cells:state.cells.map((val) => {
            return {
              ...val,
              value: val.fibNum? 0: val.value,
              fibNum: false
            }
          })
        }
      } else  {
        return state;
      }
    default:
      return state;
  }
}

export default grid;
