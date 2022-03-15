function ProductImage({theme, color}) {
  return (
    <img
      className="ml-auto"
      src={`images/theme-${theme}-${color}.png`}
      alt={`Abstract ${theme} ${color} wallpaper`}
      style={{height: '50vh', gridRow: '1 / 3'}}
    />
  );
}

export default ProductImage;
