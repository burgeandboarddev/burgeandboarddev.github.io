import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const Pricing: NextPageWithLayout = () => {
  return (
    <>
      <div className={`${styles.gallery_block} row text-center justify-content-center p-5 m-5`}>
        <div className={styles.block_title}>FAQ</div>
      </div>
      <div className="row m-5">
        <div className="col-1">
        </div>
        <div className="col-10">
          <h1>How do I place an order?</h1>
          <p>
            There are many ways you can place an order with us! If you are on on our website, click on our ORDER page.
            This page contains our email address and phone number, which you can use to call, text or email to place
            your order. We've also provided a contact box, which you can fill out with any questions/concerns/orders
            which will then be sent directly to our email. You may also send us a direct message on our Facebook or
            Instagram accounts.
          </p>

          <h1>How do I pay?</h1>
          <p>
            We accept payments through Venmo, Paypal, or with your standard Debit/Credit card (Visa, Mastercard,
            American Express, Discover). Payment is due at the time of order.
          </p>

          <h1>How will I receive my order?</h1>
          <p>
            We offer local delivery and pick-up only (Houston, TX and surrounding areas). Delivery is free of charge if
            you live in Clear Lake, or are willing to meet for pickup. Otherwise, a $10 delivery charge will be added to
            your order.
          </p>

          <h1>How does the board rental work?</h1>
          <p>
            At the time of your order, we will charge you a $10 board rental fee if you would like to use one of our
            boards. We also understand extra fees are not everyone's thing so we do have a disposable board option as
            well.
          </p>
        </div>
      </div>
    </>
  );
}
export default Pricing

Pricing.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
