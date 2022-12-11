# Frontend Mentor - Stats preview card component solution

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
    - [Screenshot](#screenshot)
    - [Built With](#built-with)
    - [What I learned](#what-i-learned)
    - [Links](#links)
  - [Author](#author)

### Screenshot

![Stats Preview Card Component Mobile](./mobile-screenshot.png)
![Stats Preview Card Component Desktop](./desktop-screenshot.png)

### Built With

- HTML5
- CSS3
- Flexbox
- Mobile-first design

### What I learned

Setting an overlay color to a image is really easy!

Set the background color of the image container and setup up the mix-blend-mode property, as well as the opacity property to your desired value.

```html
<div class="img-container">
  <img class="img" />
</div>
```

```css
.img-container {
  background-color: hsl(277, 64%, 61%);
}

.img {
  mix-blend-mode: multiply;
  opacity: 0.75;
}
```

### Links

- [Solution](https://www.frontendmentor.io/solutions/stats-preview-card-component-N0w9hd4euT)
- [Live](https://dancing-salmiakki-2d3938.netlify.app/)

## Author

- Website - [David Pelo](https://www.davidpelo.com)
- Frontend Mentor - [@DavidPelo](https://www.frontendmentor.io/profile/DavidPelo)
