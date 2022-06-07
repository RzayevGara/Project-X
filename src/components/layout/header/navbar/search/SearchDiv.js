import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setSearchList, setSearchParams,setSearchStatus ,setFilteredArray} from "../../../../../Reducer/SearchReducer";
import commerce from "../../../../../lib/Commerce"

const SearchDiv = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.search.filteredArray);
  const searchParams = useSelector((state) => state.search.searchParams)
  const searchList = useSelector((state) => state.search.searchList)
  console.log(searchParams)
  console.log(list)

  useEffect(() => {
    dispatch(setSearchParams(""));
  }, [location]);

  useEffect(()=>{
      if(searchParams.length!==0 && searchList.length === 0){
          dispatch(setSearchStatus(true))
          console.log('isledi')
        commerce.products.list({
            category_slug: ['search'],
            limit: 200
        }).then(response => {dispatch(setSearchList(response.data));dispatch(setSearchStatus(false))});
      }
  },[searchParams])

  useEffect(() => {
      if(searchParams.length!==0){
          let copy = searchList.filter((item) =>{
              return (new RegExp(searchParams.join('|')).test(item.name.toLowerCase()))
          })
          dispatch(setFilteredArray(copy))
      }
  },[searchParams,searchList])

  if (list.length === 0) {
    return null;
  } else {
    return (
      <div className="search-result">
        <div className="result-clear">
          <p className="search-result-title">Nəticələr</p>
          <p
            onClick={() => {
              dispatch(setSearchParams(""));
              document.querySelector(".search-input").focus();
            }}
            className="search-result-clearBtn"
          >
            Təmizlə
          </p>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <Link to={`${item.name.split(" ")[0].toLowerCase()}/${item.id}`}>
                <img src={item.image.url} alt="logo" />
                <div className="result-name">
                  <p>
                    {item.name}{" "}
                    {item.variant_groups.length > 1 &&
                      item.variant_groups[1].options[0].name}
                  </p>
                  <p>{item.price.formatted_with_symbol}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchDiv;
