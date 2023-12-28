import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const MonthlySpecials: NextPageWithLayout = () => {
  return (
    <>
      <div className={`${styles.gallery_block} row text-center justify-content-center p-5 m-5`}>
        <div className={styles.block_title}>Monthly Specials + Holidays</div>
      </div>
      <p className="text-center">
        Be sure to check in to see what monthly specials we have available as<br/>
        well as seasonal/holiday options!
      </p>
    </>
  );
}
export default MonthlySpecials

MonthlySpecials.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
