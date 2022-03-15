import {useState} from 'react';
import data from './data';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import ThemeSelector from './components/ThemeSelector';
import ColorSelector from './components/ColorSelector';
import '@fontsource/poppins';

function App() {
  const [theme, setTheme] = useState('dark');
  const [themes, setThemes] = useState(data.themes);
  const [color, setColor] = useState('blue');
  const [colors, setColors] = useState(data.colors);

  function handleThemeChange(themeValue) {
    const availableThemeColors = data.groupByTheme[themeValue];

    setTheme(themeValue);
    setColors(availableThemeColors);

    if (!availableThemeColors.includes(color)) {
      setColor(availableThemeColors[0]);
    }
  }

  function handleColorChange(colorValue) {
    const availableThemeColors = data.groupByColor[colorValue];
    setColor(colorValue);
    setThemes(availableThemeColors);

    if (!availableThemeColors.includes(theme)) {
      setTheme(availableThemeColors[0]);
    }
  }

  return (
    <div className="container mx-auto mt-10 px-6 max-w-4xl">
      <Header />
      <div
        className="grid grid-items gap-6"
        style={{
          gridTemplateColumns: 'auto auto',
          gridTemplateRows: 'auto auto',
        }}
      >
        <ProductImage theme={theme} color={color} />
        <ThemeSelector
          theme={theme}
          themes={themes}
          handleThemeChange={handleThemeChange}
        />
        <ColorSelector
          color={color}
          colors={colors}
          handleColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default App;
