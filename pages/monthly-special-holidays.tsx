import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const MonthlySpecials: NextPageWithLayout = () => {
  return (
    <>
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
