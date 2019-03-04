import React from 'react';
import { Shop } from './pages'; //pagal defaulta ieskomas pages.js, jei nera tada pages katalogo ir jame index.js failo
import { PageLayout } from './components';

const NAV_LINKS = ['shop', 'cart', 'favorites'].map(link => (
  <button type="button" onClick={() => console.log(link)}>
    {link}
  </button>
));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
      .then(response => response.json())
      .then(json => this.setState({ products: json }))
      .catch(() => this.setState({ error: 'Something Went Wrong' }));
  }

  render() {
    const { products } = this.state;

    return (
      <PageLayout navLinks={NAV_LINKS}>
        {products.map((product, i) => (
          <p key={i}>{product.name}</p>
        ))}
        <Shop />
      </PageLayout>
    );
  }
}

export default App;
