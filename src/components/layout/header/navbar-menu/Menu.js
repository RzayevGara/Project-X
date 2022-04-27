import React, {useState, useEffect} from 'react'
import commerce from '../../../../lib/Commerce';
import {useDispatch } from 'react-redux'
import { setCategory} from '../../../../Reducer/ProductReducer'
import { Link } from "react-router-dom";


const Menu = (props) =>{
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch()

  const fetchProducts = () => {
    commerce.categories.retrieve('products', { type: 'slug', depth:'3' }).then((products) => {
      setProducts(products.children);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div className={props.active ? "menu active" : "menu"}>
      <ul className="categories">
        {
          products.map((item, index)=>(
            <li
            onClick={() =>
              dispatch(setCategory((item.slug)))
            }
            key={index} className="items">     <Link to={`/${item.slug}`}>{item.name}</Link>
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
      <div className='menu-buttons'>
        <p className='log-btn'>Daxil ol</p>
        <p className='sign-btn'>Qeydiyyat</p>
      </div>
    </div>
  )
}

export default Menu