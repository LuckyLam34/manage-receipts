import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../constants/interfaces';
import { requestReceipts } from '../redux/actions';

interface IProps {
  filterReceipts: any;
  currentPage: number;
  filter: string;
}

class Filter extends React.Component<IProps, any> {
  timer: any;

  constructor(props: any) {
    super(props);
    this.state = {
      filterText: this.props.filter,
    };
  }

  filter = (value: string) => {
    this.setState({
      filterText: value,
    });

    console.log(value);
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.filterReceipts(this.props.currentPage, value),
      500
    );
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter..."
            value={this.state.filterText}
            onChange={(e) => this.filter(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const { currentPage, filter } = state;
  console.log(state);

  return {
    currentPage,
    filter,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  filterReceipts: (currentPage: number, filterText: string) =>
    dispatch(requestReceipts(currentPage, filterText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
