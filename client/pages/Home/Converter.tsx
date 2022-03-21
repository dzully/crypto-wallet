import type { NextPage } from "next";
import { handlePrimaryField, handleSecondaryField } from "@/reducer/home_rdc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Converter from "../../components/converter";
import { ChangeEvent } from "react";

const Home: NextPage = () => {
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

  const displayProps = { handleChange, primaryField, secondaryField };

  return <Converter displayProps={displayProps} />;
};

export default Home;
