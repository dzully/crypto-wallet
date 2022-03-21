import Typography from "@mui/material/Typography";
import { DisplayProps } from "@/components/converter/types";
import { listTextFieldProps } from "@/pages/Home/types";

const Display = ({ displayProps }: DisplayProps) => {
  const {
    handleChange,
    primaryField,
    secondaryField,
    primaryCurrency,
    secondaryCurrency,
    listTextField,
  } = displayProps;

  return (
    <div className="flex flex-col">
      {listTextField?.map((item: listTextFieldProps, key: number) => (
        <div
          key={key.toString()}
          className="relative flex flex-col border border-solid rounded border-gainsboro mb-1 h-full"
        >
          <div className="relative flex items-center p-[5px] w-full">
            <Typography variant="h6" className="text-[gray]">
              {item.name === "primary" ? primaryCurrency : secondaryCurrency}
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
