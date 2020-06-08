import React from 'react';
import { IReceipt } from '../constants/interfaces';

// export class ReceiptList extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//   }

//   render() {
//     return <div></div>;
//   }
// }
export const ReceiptList = ({
  currentPage,
  filter,
  deleteReceipt,
  receipts,
}: any) => (
  <div>
    {receipts.map((item: IReceipt, idx: number) => (
      <div key={idx}>
        <div className="receipt-list">
          <div className="d-flex align-items-center">
            <div className="w-l pr-3">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <div className="w-r">
              <button
                type="button"
                onClick={() => deleteReceipt(item.id, currentPage, filter)}
                className="btn btn-danger delete btn-block"
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
    {receipts.length === 0 ? <div>No data</div> : ''}
  </div>
);
