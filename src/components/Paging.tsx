import React from 'react';

export const Paging = ({
  currentPage,
  totalPages,
  filter,
  requestReceipts,
}: any) => {
  let content = [];

  for (let i = 1; i <= totalPages; i++) {
    content.push(
      <button
        onClick={() => requestReceipts(i, filter)}
        className={i === currentPage ? 'active' : ''}
        key={i}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="paging mt-3 d-flex justify-content-center">
      {content.length > 0 && currentPage !== 1 ? (
        <button onClick={() => requestReceipts(currentPage - 1, filter)}>
          &laquo;
        </button>
      ) : null}
      {content}
      {content.length > 0 && totalPages > currentPage ? (
        <button onClick={() => requestReceipts(currentPage + 1, filter)}>
          &raquo;
        </button>
      ) : null}
    </div>
  );
};
