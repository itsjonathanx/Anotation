# Adicionado CSS

## Inline
  * atributo `style`
  ```html 
    <h1 style="color: blue">Titulo</h1> 
  ```
## < style > 
  * tag html que irá conter o css
  ```html
    <style>
      h1 {
        color: blue;
      }
    </style>
  ```

## < link >
  * arquivo css externo
  ```html
    <link rel="stylesheet" href="style.css">
  ```

## @import
  * tag html que irá conter o @import 
  ```html
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  ```
  * tag css que irá conter o @import
  ```css
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    h1 {
      font-family: 'Roboto', sans-serif;
    }
  ```