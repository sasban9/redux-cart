import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Test",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 13,
    title: "My First super looooooooooooooong BOOK Title",
    description: "This is a cute book!",
  },
  {
    id: "p3",
    price: 22,
    title: "My First Teddy",
    description: "A fluffy teddy for kids!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
