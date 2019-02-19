export const INITIALIZE_GRID = "INITIALIZE_GRID";
export const ITERATE_GRID_VALUES = "ITERATE_GRID_VALUES";
export const GRID_CLEAR_STATE = "GRID_CLEAR_STATE";


export function iterateGridValues([x, y]) {
  return {
    type: ITERATE_GRID_VALUES,
    activeCell: [x, y]
  }
}
export function gridClearState() {

  return {
    type: GRID_CLEAR_STATE,
  }
}

export function activateCell(cell) {
  return function(dispatch) {
    dispatch(iterateGridValues(cell));

    // This cleans up state, but allows for animations
    // to occur as well
    return (new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000)
    })).then(() => {
      dispatch(gridClearState())
    });
  }
}

export function initializeGrid([width, height]) {
  return {
    type: INITIALIZE_GRID,
    width: width,
    height: height
  }
}
