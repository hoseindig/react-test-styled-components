import "./combo.scss";
const Combo = ({
  options,
  name,
  value = null,
  changeHandle,
  label = "",
  errors = {},
}) => {
  console.log(
    "%cCombo",
    "background:blue",
    options.length,
    name,
    label,
    value,
    typeof changeHandle,
    errors[name] ? errors[name] : "",
    
  );
  return (
    <div className="input-combo">
      <span>{label}</span>
      <select value={value} name={name} onChange={changeHandle}>
        {options.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.title}
            </option>
          );
        })}
      </select>
      {errors[name] && <span className="error"> {errors[name]}</span>}
    </div>
  );
};

export default Combo;
