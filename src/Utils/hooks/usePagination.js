import React, { useState } from "react";
const usePagination = (props) => {
  const { data= {} } = props;
  const [page, setPage] = useState(1);

  const paginationLayout = () => {

    return (
      <>
        {data.total_pages > 1 && (
          <div className="d-md-flex d-block justify-content-between w-100">
            <p className="product_count text-center text-md-left">{`Showing ${data.page}– ${data.total_pages} of ${data.total} results`}</p>
            <div className="prodt_pagination mb-3">
              <ul>
                <li>
                  <span
                    onClick={() => setPage(page - 1)}
                    className={page === 1 ? "disable" : ""}
                  >
                    {"< "}
                  </span>
                </li>
                {page}
                <li>
                  <span
                    onClick={() => setPage(page + 1)}
                    className={data.page === data.total_pages ? "disable" : ""}
                  >
                    {">"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  };
  return {
    paginationLayout,
    page,
  };
};
export default usePagination;
