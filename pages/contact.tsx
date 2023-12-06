import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';

const Contact: NextPageWithLayout = () => {
  return (
    <>
    </>
  );
}
export default Contact

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
