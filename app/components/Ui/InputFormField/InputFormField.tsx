import { forwardRef } from "react";
import { InputField } from "@ui/InputField/InputField";

export const InputFormField = forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.fieldName}>{props.fieldName}</label>
      <InputField
        input={{ required: true }}
        ref={ref}
        fieldType={props.fieldType.toLowerCase()}
        fieldName={props.fieldName.toLowerCase()}
      />
    </>
  );
});
