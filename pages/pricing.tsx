import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const Pricing: NextPageWithLayout = () => {
  return (
    <>
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
