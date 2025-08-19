import { usePizzaOfTheDay } from './custom_hooks/usePizzaOfTheDay';

const intl = new Intl.NumberFormat('en-gb', {
  style: 'currency',
  currency: 'GBP',
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if(!pizzaOfTheDay) {
    return <div>Loading...</div>
  }

  return <div className="pizza-of-the-day">
    <h2>Pizza of the day</h2>
    <div>
      <div className="pizza-of-the-day-info">
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
        <p className="pizza-of-the-day-price">
          From: {intl.format(pizzaOfTheDay.sizes.S)}
        </p>
      </div>
      <img src={pizzaOfTheDay.image} alt={pizzaOfTheDay.name} className="pizza-of-the-day-image" />
    </div>
  </div>
}

export default PizzaOfTheDay;