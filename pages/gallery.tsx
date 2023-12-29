import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const Gallery: NextPageWithLayout = () => {
  return (
    <>
      <div className={`${styles.gallery_block} row text-center justify-content-center p-5 m-5`}>
        <div className={styles.block_title}>Boards, Tables + More</div>
      </div>
      <div className="text-center m-5 p-5">
        <div className="col-6 m-auto">
          <p>
            All of our boards are designed to fit any occasion. Whether it be a night in,
            work luncheon, a picnic in the park, birthday party or gathering- we are guaranteed
            to have a board that will match your style. Please let us know if you have any food
            allergies/dietary restrictions and we will try our best to accommodate.
          </p>
          <p>
            <em>*Each order comes with a complimentary baguette and cracker box</em>
          </p>
        </div>
      </div>
      <div className="col-8 m-auto">
        {items.map((item, i) => mkItemHtml(item, i))}
      </div>
    </>
  );
}
export default Gallery

Gallery.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

function mkItemHtml(item: MenuItem, index: number) {
  const isEven = index % 2 == 0
  const imgUrl = `/img/${item.img}`
  const justifyCls = isEven ? "justify-content-start" : "justify-content-end"
  const img =
    <div className={`col-5 p-0 ${justifyCls}`}>
      <img className={`img-fluid ${styles.gallery_img}`} src={imgUrl} alt={item.name}/>
    </div>
  const prices = item.prices ? (
    <div className={styles.prices}>
      <h2>PRICES</h2>
      <ul>
        {item.prices.map(p => (
          <li key={p.name}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </div>
  ) : (<></>)
  const descr = (
    <div className="col-7">
      <div className="text-center">
        <h1 className={styles.block_title}>{item.name}</h1>
        {item.description}
        {prices}
      </div>
    </div>
  )
  const elems = isEven ? [img, descr] : [descr, img]
  const rowCls = isEven ? styles.even : styles.odd;
  return (
    <div className={`row mb-4 d-flex align-items-center ${justifyCls} ${rowCls}`}>
      {elems[0]}
      {elems[1]}
    </div>
  )
}

type PricedItem = {
  name: string,
  price: string,
}

type MenuItem = {
  name: string,
  img: string,
  description: React.ReactElement<any, any>,
  prices?: Array<PricedItem>,
}

const items: Array<MenuItem> = [
  {
    name: 'Classic',
    img: 'menu-classic.webp',
    description: <>
      The Classic Board is made up of an assortment of handpicked cheeses,
      cured meats, crackers, kalamata olives, dips, a mix of nuts + dried fruit,
      seasonal fresh fruit, veggies + a jar of local honey.
    </>,
    prices: [
      {name: 'Small Board', price: '$95'},
      {name: 'Medium Board', price: '$115'},
      {name: 'Large Board', price: '$140'},
    ]
  },
  {
    name: 'Rustic',
    img: 'menu-rustic.webp',
    description: <>
      The Rustic Board is made up of an assortment of handpicked cheeses,
      cured meats, regular/fig + olive crackers, casteltrevano olives, dips,
      sundried tomatoes, candied pecans, seasonal fresh fruit, dried figs, a
      fresh honeycomb with lavender.
    </>,
    prices: [
      {name: 'Small Board', price: '$100'},
      {name: 'Medium Board', price: '$120'},
      {name: 'Large Board', price: '$145'},
    ]
  },
  {
    name: 'Dreamy',
    img: 'menu-dreamy.webp',
    description: <>
      The Dreamy Board is made up of an assortment of handpicked cheeses,
      cured meats, crackers, olives, dips, candied pecans, seasonal fresh fruit,
      scones, vanilla meringues, dried fruit, a jar of local jam.
    </>,
    prices: [
      {name: 'Small Board', price: '$100'},
      {name: 'Medium Board', price: '$120'},
      {name: 'Large Board', price: '$145'},
    ]
  },
  {
    name: 'The Grazer',
    img: 'menu-grazer.webp',
    description: <>
      Our Grazing Tables include: An assortment of cheeses, salami, prosciutto,
      bread/baguette/crackers, dips(spinach dip, pesto, hummus and smoked gouda dip),
      olives, fresh fruit, fresh vegetables, dried fruit, candied pecans, pistachios
      and fresh honeycomb.
      <br/>
      <br/>
      *Email/Call for inquiries
    </>,
  },
  {
    name: 'Boxes',
    img: 'menu-boxes.webp',
    description: <>
      Mini Box - Appetizer Portion size for one: $9.50 each
      (minimum order of 10)
      nbsp;
      nbsp;
      Personal Box - Feeds 1-2ppl: $20.00 each
      (minimum order of 4)
      nbsp;
      nbsp;
      Couples Box - Feeds 2-4ppl: $40.00 each
      (minimum order of 2 outside of monthly special)
      nbsp;
      nbsp;
      Large Box - Feeds 6-8ppl: $80.00 each
    </>,
  },
  {
    name: 'Brunch Box + Table',
    img: 'menu-brunch-box-table.webp',
    description: <>
      Our Brunch Boxes and Tables Include:
      Bagel Sandwiches: Sundried tomato, Pesto,
      Fresh Mozzarella and Baby Spinach / Smoked
      Salmon, Cream Cheese, Red Onion and Capers.
      Fresh Fruits and Cheese, Quiche, Loaf Bread with Cinnamon Cream Cheese Dip and Yogurt Parfaits.
    </>,
    prices: [
      {name: 'Individual Box', price: '$20 each (minimum order of 8)'},
      {name: 'Regular Box', price: '$45 each (minimum order of 4)'},
      {name: 'Large Box', price: '$85 each - (minimum order of 2)'},
      {name: 'Table', price: 'email/call for inquiries'},
    ]
  },
  {
    name: 'Grazing Cups',
    img: 'menu-grazing-cups.webp',
    description: <>
      $9.50 Each
      <br/>
      (minimum order of 10 cups)
      <br/>
      <br/>
      Grazing cups include:
      <br/>
      Choice of dip (pesto, fresh honeycomb or jam),
      salami, 2 cheeses, cucumber, fresh fruit, olives,
      crackers and candied pecans
    </>,
  },
  {
    name: 'Crudité Board',
    img: 'menu-crudite-board.webp',
    description: <>
      Seasonal Veggies with two dips.
      <br/>
      Dip choices: Spinach dip, hummus or whipped feta dip
    </>,
    prices: [
      {name: 'Small Board', price: '$75'},
      {name: 'Medium Board', price: '$100'},
    ]
  },
  {
    name: 'Grazing Letters/Numbers',
    img: 'menu-grazing-letters-numbers.webp',
    description: <>
      Our Grazing Letters/Numbers are the perfect personalized gift/treat for any occasion!
      <br/>
      <br/>
      Include: An assortment of cheeses, salami, prosciutto, crackers, dips), olives,
      fresh fruit, fresh vegetables, dried fruit, candied pecans, pistachios and
      fresh honeycomb.
    </>,
    prices: [
      {name: '16" Letter/Number', price: '$70'},
    ]
  },
  {
    name: 'Artisan Sandwiches',
    img: 'menu-artisan-sandwiches.webp',
    description: <>
      <b>
        These sandwiches make the perfect addition to any party or event! You can add them
        to a grazing table, pair a sandwich box/tray with a cheeseboard or you can order these
        solo on large party catering orders. Choose from several options below:
      </b>
      <br/>
      <br/>
      Chicken Salad - rotisserie chicken, onions, celery, pickles, fresh garlic, mayo,
      mustard, seasonings, choice of micro greens or baby spinach/arugula mix served
      on a croissant
      <br/>
      (curry chicken is also available - includes curry + fresh chopped cilantro)
      <br/>
      <br/>
      The Veg - Fresh Mozzarella, tomato, red onion, baby spinach/arugula mix and pesto
      served on a baguette
      <br/>
      <br/>
      The Classic - Choice of Ham or Turkey, American, swiss or provolone cheese, mayo
      or mustard, sprouts, spinach/arugula mix, tomato + red onion served on sourdough
      <br/>
      <br/>
      The Sicilian - Genoa Salami, Pepperoni + Ham, provolone, Garlic Aioli, spinach/arugula
      mix + pepperoncini's
      <br/>
      (olive tapenade available as add on)
      <br/>
      <br/>
      Egg salad + Tuna Salad
      <br/>
      <br/>
      <b>*Email/Call or Fill out an Order Form for Inquiries</b>
    </>,
  },
]
