import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ProductSort() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="product-sort">
      <p>200 məhsul tapıldı</p>
      <Box sx={{ minWidth: 220 }} size="small">
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
            defaultValue={10}
          >
            <MenuItem default value={10}>Ən Yenilər</MenuItem>
            <MenuItem value={20}>Qiymət - Artan sıra</MenuItem>
            <MenuItem value={30}>Qiymət - Azalan sıra</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default ProductSort;
