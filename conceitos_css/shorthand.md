# Shorthand
  * junção de propriedades
  * resumindo
  * legível

```css
{
  /* background properties */
  background-color: #000;
  background-image: url(image/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand */
  background: #000 url(image/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: .8rem;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: bold italic .8rem/1.2 Arial, sans-serif;
}

```

## Detalhes
  * não irá considerar propriedades anteriores
  * valores não especificados irão assumir o valor padrão
  * geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas
  

## Propriedades que aceitam shorthand
  animation, background, border, border-bottom, border-color, border-left, 
  border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-items, place-self, text-decoration, transition 

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**