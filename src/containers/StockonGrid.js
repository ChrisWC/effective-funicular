import { connect } from 'react-redux';
import { activateCell, initializeGrid } from '../actions/grid';
import Grid from '../components/Grid';

const mapStateToProps = ({grid}) => ({
  cells: grid.cells
});

const mapDispatchToProps = dispatch => ({
  handleCellClick: ([x, y]) => dispatch(activateCell([x, y])),
  initialize: ([width, height]) => dispatch(initializeGrid([width, height]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
