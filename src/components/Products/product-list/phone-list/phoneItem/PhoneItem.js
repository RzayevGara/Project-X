import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
// import { color } from "@mui/system";

function PhoneItem(props) {
  const colorArray = useSelector((state) => state.category.filterColor)
  const sizeArray = useSelector((state) => state.category.filterSize)
  console.log(colorArray)
  return (
    <>
    {props.array.variant_groups.length===2 &&
      props.array.variant_groups[0].options.map((item, index)=>(
        props.array.variant_groups[1].options.map((itemm, indexx)=>{
          if(colorArray.length>0){
            return(
              colorArray.map((color, colorIndex)=>{
               if(color.toLowerCase() === item.name.toLowerCase() || color===itemm.name){
                 console.log("isledi")
                 return(
                 <Link key={colorIndex} className="link" to={`/butun-mehsullar/${props.array.id}`}>
                      {props.array && console.log(props.array)}
                      <li className="phone-item">
                        <img 
                        src={
                          props.array.assets.map((main)=>{
                            if(main.id==item.assets){
                              return main.url
                            }
                          }).join('')
                        }
                        alt="logo" />
                        <h5 id="main-title">{props.array.name} <span>{item.name}</span>
                        </h5>
                        <p>{itemm.name}</p>
                        <p>{props.array.price.raw+item.price.raw+itemm.price.raw + " " + "₼"}</p>
                      </li>
                    </Link>
                 )

               }
                
          })
            )
          }else if(colorArray.length===0){
            return (
            <Link key={indexx} className="link" to={`/butun-mehsullar/${props.array.id}`}>
                <li className="phone-item">
                  <img 
                  src={
                    props.array.assets.map((main)=>{
                      if(main.id==item.assets){
                        return main.url
                      }
                    }).join('')
                  }
                  alt="logo" />
                  <h5>{props.array.name} <span>{item.name}</span>
                  <br/>
                  </h5>
                  <p>{itemm.name}</p>
                  <p>{props.array.price.raw+item.price.raw+itemm.price.raw + " " + "₼"}</p>
                </li>
              </Link>
            )
          }
        
        })
      ))
    }
    {props.array.variant_groups.length===1 &&
      props.array.variant_groups[0].options.map((item, index)=>{
        if(colorArray.length>0){
          return(
            colorArray.map((color, colorIndex)=>(
            color.toLowerCase() === item.name.toLowerCase() &&
            <Link key={colorIndex} className="link" to={`/butun-mehsullar/${props.array.id}`}>
            <li className="phone-item">
              <img 
              src={
                props.array.assets.map((main)=>{
                  if(main.id==item.assets){
                    return main.url
                  }
                }).join('')
              }
              alt="logo" />
              <h5>{props.array.name} {item.name}</h5>
              {/* <p>{props.array.price.formatted_with_symbol}</p> */}
              <p>{props.array.price.raw+item.price.raw + " " + "₼"}</p>
  
            </li>
          </Link>
              
            ))
          )
        }else if(colorArray.length===0){
          return (
            <Link key={index} className="link" to={`/butun-mehsullar/${props.array.id}`}>
            <li className="phone-item">
              <img 
              src={
                props.array.assets.map((main)=>{
                  if(main.id==item.assets){
                    return main.url
                  }
                }).join('')
              }
              alt="logo" />
              <h5>{props.array.name} {item.name}</h5>
              {/* <p>{props.array.price.formatted_with_symbol}</p> */}
              <p>{props.array.price.raw+item.price.raw + " " + "₼"}</p>
  
            </li>
          </Link>
          )
        }




       
    })
    }
    {props.array.variant_groups.length===0 &&
      colorArray.length===0?
      <Link className="link" to={`/butun-mehsullar/${props.array.id}`}>
      <li className="phone-item">
        <img src={props.array.image.url} alt="logo" />
        <h5>{props.array.name}</h5>
        <p>{props.array.price.raw + " " + "₼" }</p>
      </li>
    </Link>:
      colorArray.map((color, colorIndex)=>{
          if(color===props.array){
            return(
            <Link className="link" to={`/butun-mehsullar/${props.array.id}`}>
              <li className="phone-item">
                <img src={props.array.image.url} alt="logo" />
                <h5>{props.array.name}</h5>
                <p>{props.array.price.raw + " " + "₼" }</p>
              </li>
            </Link>
            )
          }
        
        })
          
    }
    </>
  )
}

export default PhoneItem;

        // <Link className="link" to={`/butun-mehsullar/${props.array.id}`}>
        //   <li className="phone-item">
        //     <img src={props.array.image.url} alt="logo" />
        //     <h5>{props.array.name}</h5>
        //     <p>{props.array.price.raw + " " + "₼" }</p>
        //   </li>
        // </Link>