function renderProduct(data = null) {
  const template = `
<li class="product">
<figure>
<img src="assets/img/sundaymorningrain.jpg" width="260" height="179" alt="">
<figcaption>
<h2>Sunday Morning Rain Tea</h2>
</figcaption>
</figure>
</li>
`;
  const element = document.createRange().createContextualFragment(template)
    .children[0];

  return element;
}

export { renderUser };
