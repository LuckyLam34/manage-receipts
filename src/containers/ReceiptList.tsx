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
export const ReceiptList = ({ receipts }: any) => (
  <div>
    {receipts.map((item: IReceipt, idx: number) => (
      <div key={idx}>
        <div className="receipt-list">
          <div className="d-flex">
            <div className="w-90">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <div className="w-10">
              <button
                type="button"
                // onClick={() => removeFridgeItem(fridgeItem.id)}
                className="btn btn-danger delete btn-block"
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
