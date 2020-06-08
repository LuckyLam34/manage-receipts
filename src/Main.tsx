import React from 'react';
import { connect } from 'react-redux';
import { ReceiptList } from './containers/ReceiptList';
import { IState, IReceipt } from './constants/interfaces';
import { requestReceipts } from './redux/actions';

interface ILocalProps {
  loadingFlagGlobal: boolean;
  requestReceipts: any;
  receipts: IReceipt[];
}

class Main extends React.Component<ILocalProps, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReceipts();
  }

  render() {
    return (
      <div>
        {this.props.loadingFlagGlobal ? (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : null}
        <div
          className={
            this.props.loadingFlagGlobal ? 'loading container' : 'container'
          }
        >
          <div className="jumbotron">
            <h1 className="display-4">Receipts Overview</h1>
            <hr className="my-4" />
            <ReceiptList receipts={this.props.receipts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  let { loadingFlagGlobal, receipts } = state;

  return {
    loadingFlagGlobal,
    receipts,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestReceipts: () => dispatch(requestReceipts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
