import React, {useState} from 'react'
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";


function FilterCategory(props) {
    const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <div className="brend">
        <div className="brend-title">
          <h5>{props.brendTitle}</h5>
          <img
            onClick={plusBtn}
            src={!active ? MinusIcon : PlusIcon}
            alt="logo"
          />
        </div>
        <div className={!active ? "brend-text" : "brend-text active-brend"}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                {
                    props.brendList.map((item,index) => (
                        <FormControlLabel
                            value={item.toLowerCase()}
                            control={<Checkbox color="success"/>}
                            label={item}
                            labelPlacement="end"
                            key={index}
                        />
                    ))
                }
            </FormGroup>
          </FormControl>
        </div>
      </div>
  )
}

export default FilterCategory