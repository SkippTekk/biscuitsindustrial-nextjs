export const FormButton = (props) => {
  return (
    <button
      className={`bg-green-400 mt-5 h-10 text-black text-2xl font-bold mb-5 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
};
