import React from 'react'
import { useSelector} from "react-redux";

function ParamsComment(props) {
  const product = useSelector((state) => state.setProductDetail.list);
  console.log(product);

    if(props.switch===false){
        return (
          <div className="product-params">
              <div className="params">
                  <ul>
                    <p className="params-title">Əsas göstəricilər</p>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                  </ul>
                  <ul>
                    <p className="params-title">Əsas göstəricilər</p>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                  </ul>
                  <ul>
                    <p className="params-title">Üstünlüklər</p>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                    <li><p>İstehsalçı</p> <p>{product.name}</p></li>
                  </ul>
              </div>
              <div className="description">
                  <h4>Məhsul haqqında</h4>
                  <p>{product.description}</p>
              </div>
          </div>
        )
    }else{
        return (
            <div>Comment</div>
          )
    }
}

export default ParamsComment