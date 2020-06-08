import React from 'react';
import { connect } from 'react-redux';
import { ReceiptList } from './components/ReceiptList';
import { IState, IReceipt } from './constants/interfaces';
import { requestReceipts, deleteReceipt } from './redux/actions';
import Filter from './containers/Filter';
import { Paging } from './components/Paging';

interface ILocalProps {
  loadingFlagGlobal: boolean;
  requestReceipts: any;
  receipts: IReceipt[];
  currentPage: number;
  totalPages: number;
  filter: string;
  deleteReceipt: any;
}

class Main extends React.Component<ILocalProps, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReceipts(this.props.currentPage, this.props.filter);
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
            {!this.props.loadingFlagGlobal ? (
              <>
                <Filter />
                <ReceiptList {...this.props} />
                <Paging {...this.props} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  let { loadingFlagGlobal, receipts, currentPage, totalPages, filter } = state;

  return {
    loadingFlagGlobal,
    receipts,
    currentPage,
    totalPages,
    filter,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestReceipts: (currentPage: number, filter: string) =>
    dispatch(requestReceipts(currentPage, filter)),
  deleteReceipt: (id: number, currentPage: number, filterText: string) =>
    dispatch(deleteReceipt(id, currentPage, filterText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
