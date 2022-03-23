import Typography from "@mui/material/Typography";
import { DisplayProps } from "@/components/converter/types";
import { listTextFieldProps } from "@/pages/home/types";

const Display = ({
  handleChange,
  listTextField,
  primaryCurrency,
  primaryField,
  secondaryCurrency,
  secondaryField,
}: DisplayProps) => (
  <div className="flex flex-col">
    {listTextField?.map((item: listTextFieldProps, key: number) => {
      const validate = item.name === "primary";
      const currency = validate ? primaryCurrency : secondaryCurrency;
      const inputValue = validate ? primaryField : secondaryField;

      return (
        <div
          key={key.toString()}
          className="relative flex flex-col border border-solid rounded border-gainsboro mb-1 h-full"
        >
          <div className="relative flex items-center p-[5px] w-full">
            <Typography variant="h6" className="text-[gray]">
              {currency}
            </Typography>
          </div>
          <div className="relative flex w-full justify-end pl-[2px]">
            <input
              className="text-[80px] outline-0 h-[100px] w-full"
              id={item.id}
              name={item.name}
              onChange={handleChange(currency, key)}
              type="number"
              value={inputValue}
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default Display;
