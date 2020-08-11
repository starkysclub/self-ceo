```jsx
const Color = require('../styles/theme_components').Color;
<div>
  <h4>Normal</h4>
  <br />
  <div style={{ display: 'flex' }}>
    <Color color="primary">Primary</Color>
    <Color color="secondary">Secondary</Color>
    <Color color="default">Default</Color>
    <Color color="black">Black</Color>
    <Color color="white">White</Color>
  </div>
  <h4>Hover</h4>
  <br />
  <div style={{ display: 'flex' }}>
    <Color color="primaryHover">Primary</Color>
    <Color color="secondaryHover">Secondary</Color>
    <Color color="defaultHover">Default</Color>
  </div>
  <h4>Disabled</h4>
  <br />
  <div style={{ display: 'flex' }}>
    <Color color="primaryDisabled">Primary</Color>
    <Color color="secondaryDisabled">Secondary</Color>
  </div>
</div>;
```

## Status colors

```jsx
const Color = require('../styles/theme_components').Color;
<div style={{ display: 'flex' }}>
  <Color color="success">Success</Color>
  <Color color="danger">Danger</Color>
  <Color color="warning">Warning</Color>
  <Color color="info">Info</Color>
</div>;
```

## Shades

```jsx
const Color = require('../styles/theme_components').Color;
const BRAND = require('../constants/main').BRAND;
<div style={{ display: 'flex' }}>
  {BRAND === 'DS' && (
    <div>
      <div style={{ display: 'flex' }}>
        <Color color="champagne1">Champagne 1</Color>
        <Color color="champagne2">Champagne 2</Color>
        <Color color="champagne3">Champagne 3</Color>
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <Color color="grey1">Grey 1</Color>
      </div>
    </div>
  )}
  {BRAND === 'AP' && (
    <div>
      <div style={{ display: 'flex' }}>
        <Color color="blue1">Blue 1</Color>
        <Color color="blue2">Blue 2</Color>
        <Color color="blue3">Blue 3</Color>
        <Color color="blue4">Blue 4</Color>
        <Color color="blue5">Blue 5</Color>
      </div>
    </div>
  )}
  {(BRAND === 'AP' || BRAND === 'AC') && (
    <div>
      <div style={{ display: 'flex' }}>
        <Color color="grey1">Grey 1</Color>
        <Color color="grey2">Grey 2</Color>
        <Color color="grey3">Grey 3</Color>
        <Color color="grey4">Grey 4</Color>
        {BRAND === 'AP' && <Color color="grey5">Grey 5</Color>}
      </div>
    </div>
  )}
</div>;
```
