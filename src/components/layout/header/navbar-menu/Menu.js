import React, {useState, useEffect} from 'react'
import commerce from '../../../../lib/Commerce';
import {useDispatch, useSelector } from 'react-redux'
import { setCategory} from '../../../../Reducer/ProductReducer'
import { Link, useParams } from "react-router-dom";
import {HamburgerClick} from '../../../../Reducer/HamburgerReducer'
import {setMenuActiveText} from '../../../../Reducer/ProductReducer'
import {setMenuCategories} from '../../../../Reducer/HomePageReducer'

const Menu = () =>{
  let {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMenuActiveText(id))
  }, [dispatch, id])
  const activeMenu = useSelector((state) => state.category.menuActiveText)
  
  const products = useSelector((state) => state.homeList.menuCategories)
  const HamburgerStatus = useSelector((state) => state.setHamburger.HamburgerStatus);


  const fetchProducts = () => {
    commerce.categories.retrieve('products', { type: 'slug', depth:'3' }).then((products) => {
      dispatch(setMenuCategories(products.children))
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  const token = useSelector((state) => state.login.customerToken)

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div className={HamburgerStatus ? "menu active" : "menu"}>
      <ul className="categories">
        {products &&
          products.map((item, index)=>(
            <li
            onClick={() =>
             {
                dispatch(setCategory((item.slug)));
                dispatch(HamburgerClick(false))
              }
            }
            key={index} className="items">     
            <Link className={activeMenu===item.slug?"actimeMenuProduct":null} to={`${item.slug}`}>{item.name}</Link>
              <div className={item.children.length===0? ".hide" : "sub-categories"}>
                {
                  item.children.map((elem, indexx)=>(
                    <ul key={indexx+1}>
                      <p >{elem.name}</p>
                      {elem.children.map((sub, indexxx)=>(
                        <li key={indexxx+1} className="sub-items">{sub.name}</li>
                      ))}
                    </ul>
                  ))
                }
                  <div className='black-page'></div>
                </div>
            </li>
          ))
        }
      </ul>
      <div className='menu-buttons' style={{display: token?"none":"flex"}}>
        <Link to="/daxil-ol">
          <p onClick={()=>{dispatch(HamburgerClick(false))}} className='log-btn'>Daxil ol</p>
        </Link>
        <Link to="/qeydiyyatdan-kec">
          <p onClick={()=>{dispatch(HamburgerClick(false))}}  className='sign-btn'>Qeydiyyat</p>
        </Link>
      </div>
    </div>
  )
}

export default Menu