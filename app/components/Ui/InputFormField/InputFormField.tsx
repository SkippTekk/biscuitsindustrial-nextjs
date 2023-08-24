import { forwardRef } from "react";

export const InputFormField = forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.fieldName}>{props.fieldName}</label>
      <input
        {...props.input}
        ref={ref}
        className={`text-white bg-neutral-900 h-11 border-2 border-green-400/0 border-b-green-400 text-center mt-5 mb-5 focus:outline-none`}
        type={props.fieldType.toLowerCase()}
        id={props.fieldName.toLowerCase()}
        required
      />
    </>
  );
});
