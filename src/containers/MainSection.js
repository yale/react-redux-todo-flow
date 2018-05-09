// @flow
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount } from '../selectors';
import type { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
