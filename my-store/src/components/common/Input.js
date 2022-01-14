
export default function Input(props) {
    const { name, value, handleChange } = props;
    const title = name.toUpperCase().replace("_", " ");
  
    const possibleTypes = [
      "password",
      "date",
      "time",
      "number",
      "color",
      "email",
    ];
  
    const type = possibleTypes.reduce((finalType, currentType) => {
      return name.includes(currentType) ? currentType : finalType;
    }, "text");
  
    return (
      <>
        <label htmlFor={name}>{title}:</label>
        <input
          id={name}
          name={name}
          placeholder={name.replace("_", " ")}
          value={value}
          type={type}
          onChange={handleChange}
        />
      </>
    );
  }