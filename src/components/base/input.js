import "./input.scss";
const Input = ({ name, value = "", changeHandle, label, errors = {} }) => {
  console.log(
    "%cinput",
    "background:blue",
    name,
    label,
    value,
    typeof changeHandle,
    "error",
    errors[name] ? errors[name] : ""
  );
  return (
    <div className="input-text">
      <span>{label} :</span>

      <input
        name={name}
        type="text"
        value={value}
        onChange={changeHandle}
        placeholder={"enter " + label}
      />
      {errors[name] && <span className="error"> {errors[name]}</span>}
    </div>
  );
};

export default Input;
