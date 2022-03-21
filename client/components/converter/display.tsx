import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { handlePrimaryField, handleSecondaryField } from "@/reducer/home_rdc";
import { ChangeEvent } from "react";
import Typography from "@mui/material/Typography";

interface listTextfieldProps {
  id: string;
  label: string;
  name: "primary" | "secondary";
}

const listTextfield: listTextfieldProps[] = [
  {
    id: "outlined-primary",
    label: "primary",
    name: "primary",
  },
  {
    id: "outlined-secondary",
    label: "secondary",
    name: "secondary",
  },
];

const Display = () => {
  const primaryField = useSelector(
    (state: RootState) => state?.home?.primaryField
  );
  const secondaryField = useSelector(
    (state: RootState) => state?.home?.secondaryField
  );
  const dispatch = useDispatch();

  const handleChange =
    (label: "primary" | "secondary") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;
      if (label === "primary") {
        dispatch(handlePrimaryField(value));
      } else if (label === "secondary") {
        dispatch(handleSecondaryField(value));
      }
    };

  return (
    <div className="flex flex-col">
      {listTextfield?.map((item: listTextfieldProps, key: number) => (
        <div
          key={key.toString()}
          className="relative flex flex-col border border-solid rounded border-gainsboro mb-1 h-full"
        >
          <div className="relative flex items-center p-[5px] w-full">
            <Typography variant="h6" className="text-[gray]">
              {item?.label?.toUpperCase()}
            </Typography>
          </div>
          <div className="relative flex w-full justify-end pl-[2px]">
            <input
              className="text-[80px] outline-0 h-[100px]"
              id={item.id}
              name={item.name}
              onChange={handleChange(item.name)}
              type="number"
              value={item.label === "primary" ? primaryField : secondaryField}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
