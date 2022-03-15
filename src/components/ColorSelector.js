function ColorSelector({color, colors, handleColorChange}) {
  function handleChange(event) {
    handleColorChange(event.target.value);
  }
  return (
    <div className="-mt-4">
      <label htmlFor="color-selector" className="pr-1 font-bold">
        Color
      </label>
      <select
        defaultValue={color}
        id="color-selector"
        name="color-selector"
        onChange={handleChange}
      >
        {colors.map(name => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ColorSelector;
