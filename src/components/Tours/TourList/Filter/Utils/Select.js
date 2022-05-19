import { FormControl, Select, MenuItem } from "@mui/material";

const SelectUtil = ({
  children,
  tourCtxFn,
  tourCtxDefault,
  selectData,
  selectName,
  selectClass,
}) => {
  const onChangeHandler = (event) => {
    let args;

    if (selectName === "sort") {
      args = event.target.value.split("__");
      tourCtxFn(args[0], args[1]);
    } else {
      args = event.target.value;
      tourCtxFn(args);
    }
  };

  return (
    <FormControl sx={{width: "100%", flex: "1"}}>
      <Select
        sx={{
          "&:hover::before": {
            borderBottom: "1px solid rgba(20, 34, 46, 1)",
          },
          "&::after": {
            borderBottom: "1px solid rgba(255, 103, 76, 1)",
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
          "&:hover, &.Mui-focused": {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            transformOrigin: "center",
          },
          "&": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            color: "rgba(20, 34, 46, 1)",
            borderRadius: "0px",
            transformOrigin: "center",
            textAlign: "center",
          },
          "& .MuiSelect-icon": {
            color: "rgba(0, 0, 0, 1)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline ": {
            border: "1px solid rgba(0,0,0, 0.8)"
          }
        }}
        labelId={`${selectName}-${Math.random()}`}
        id={`${selectName}-${Math.random()}`}
        onChange={onChangeHandler}
        defaultValue={tourCtxDefault}
        MenuProps={{disableScrollLock: true}}
        className={selectClass}
      >
        {selectData.map((data, idx) => {
          return (
            <MenuItem
              key={`select-${data.value}-${idx}`}
              value={data.value}
              sx={{
                
                "&": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "rgba(0, 0, 0, 0.6)",
                },
                "&:hover": {
                  color: "rgba(0, 0, 0, 1)",
                  bgcolor: "rgba(255, 255, 255, 1)"
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "rgba(0, 0, 0, 1)",
                  bgcolor: "rgba(255, 255, 255, 1)"
                },
                "&:focus": {
                  bgcolor: "none"
                }
              }}
            >
              {data.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectUtil;
