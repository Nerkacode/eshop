import React from 'react';
import { PulseLoader } from 'react-spinners';
import { Shop, Favorites } from './pages'; // pagal defaulta ieskomas pages.js, jei nera tada pages katalogo ir jame index.js failo
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
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({
          ...product,
          isFavorite: false,
        }));
        this.setState({ products, loading: false });
      })
      .catch(() =>
        this.setState({ error: 'Something Went Wrong', loading: false })
      );
  }

  toggleFavorite = id => {
    this.setState(state => ({
      products: state.products.map(product => {
        if (product.id === id) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      }),
    }));
  };

  render() {
    const { products, loading, error } = this.state;

    return (
      <PageLayout navLinks={NAV_LINKS}>
        {loading && <PulseLoader />}
        {error && <h3>{error}</h3>}
        <Favorites
          products={products.filter(product => product.isFavorite)}
          toggleFavorite={this.toggleFavorite}
        />
        <Shop products={products} toggleFavorite={this.toggleFavorite} />
      </PageLayout>
    );
  }
}

export default App;
