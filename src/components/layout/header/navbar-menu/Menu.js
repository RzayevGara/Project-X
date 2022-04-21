import React, {useState, useEffect} from 'react'
import commerce from '../../../../lib/Commerce';


const Menu = React.memo((props) =>{
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.categories.retrieve('products', { type: 'slug' }).then((products) => {
      setProducts(products.children);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  useEffect(() => {
    fetchProducts()
  }, []);


  console.log(products);

  return (
    <div className={props.active ? "menu active" : "menu"}>
      <ul className="categories">
        {
          products.map((item, index)=>(
            <li key={index} className="items">{item.name}
              <div className="sub-categories">
                  <ul>
                    <p>Başlıq</p>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                  </ul>
                  <ul>
                    <p>Başlıq</p>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                  </ul>
                  <ul>
                    <p>Başlıq</p>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                    <li className="sub-items">Alt Başlıq</li>
                  </ul>
                  <div className='black-page'></div>
                </div>
            </li>

          ))
        }


        {/* <li className="items">Apple
          <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Samsung
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Xiaomi
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Redmi
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Bütün Brendlər
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Aksessuarlar
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li>
        <li className="items">Endirimlər
        <div className="sub-categories">
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <ul>
              <p>Başlıq</p>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
              <li className="sub-items">Alt Başlıq</li>
            </ul>
            <div className='black-page'></div>
          </div>
        </li> */}
      </ul>
      <div className='menu-buttons'>
        <p className='log-btn'>Daxil ol</p>
        <p className='sign-btn'>Qeydiyyat</p>
      </div>
    </div>
  )
})

export default Menu