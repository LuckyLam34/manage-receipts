import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../constants/interfaces';
import { filterReceipts } from '../redux/actions';

interface IProps {
  filterReceipts: any;
}

class Filter extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  filter = (value: string) => {
    this.setState({
      filterText: value,
    });

    console.log(value);
    this.props.filterReceipts(value);
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Filter..."
            value={this.state.filterText}
            onChange={(e) => this.filter(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  filterReceipts: (filterText: string) => dispatch(filterReceipts(filterText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
