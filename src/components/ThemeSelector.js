function ThemeSelector({theme, themes, handleThemeChange}) {
  function handleChange(event) {
    handleThemeChange(event.target.value);
  }
  return (
    <div className="self-end">
      <label htmlFor="theme-selector" className="pr-1 font-bold">
        Theme
      </label>
      <select
        defaultValue={theme}
        id="theme-selector"
        name="theme-selector"
        onChange={handleChange}
      >
        {themes.map(name => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSelector;
