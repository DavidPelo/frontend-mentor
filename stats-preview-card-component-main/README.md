![Stats Preview Card Component Desktop](./desktop-screenshot.png)

<h1 align="center">Stats preview card component solution
</h1>

<div align="center">
  <h3>
    <a href="https://dancing-salmiakki-2d3938.netlify.app/" color="white">
      Live
    </a>
    <span> | </span>
    <a href="https://www.frontendmentor.io/solutions/stats-preview-card-component-N0w9hd4euThttps://dancing-salmiakki-2d3938.netlify.app/">
      Solution
    </a>
    <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62">
      Challenge
    </a>
  </h3>
   Created by David Pelo
  <h4>
    <a href="https://www.davidpelo.com" color="white">
      Website
    </a>
    <span> | </span>
    <a href="https://www.frontendmentor.io/profile/DavidPelo">
      Frontend Mentor
    </a>
  </h4>
</div>
<br><br>

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
