import React, { useState, useEffect } from "react";
import commerce from "../../../../lib/Commerce";
import { useSelector, useDispatch } from "react-redux";
import { SetArray } from "../../../../Reducer/ProductReducer";
import PhoneItem from "./phoneItem/PhoneItem";
import ReactPaginate from "react-paginate";

function PhoneList() {
  // fetch data
  const category = useSelector((state) => state.category.category);
  let arrayList = useSelector((state) => state.category.arrayList);
  const dispatch = useDispatch();
  console.log(arrayList);

  useEffect(() => {
    const fetchProductList = () => {
      commerce.products
        .list({ category_slug: [category] })
        .then((products) => {
          dispatch(SetArray(products.data));
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    };
    fetchProductList();
  }, [category, dispatch]);

  // react paginate state
  const [PageNumber, setPageNumber] = useState(0);
  const userPerPage = 12;
  const pageVisited = PageNumber * userPerPage;

  const displayUsers = arrayList
    .slice(pageVisited, pageVisited + userPerPage)
    .map((item, index) => <PhoneItem key={index} array={item} />);

  const pageCount = Math.ceil(arrayList.length / userPerPage);

  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({top: 0});
  };

  return (
    <div className="phone-list">
      <ul>
        {displayUsers}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-btns"}
        previousLinkClassName	={"previous-btn"}
        nextLinkClassName	={"next-btn"}
        activeClassName={"pagination-active"}
        pageClassName	={"pagination-disabled"}
      />
    </div>
  );
}

export default PhoneList;
