import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Book'
          price={13}
          description='This is a cute book!'
        />
        <ProductItem
          title='Teddy'
          price={22}
          description='A fluffy teddy for kids!'
        />
      </ul>
    </section>
  );
};

export default Products;
