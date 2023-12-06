import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from '../components/layout';
import React from 'react';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-center">
        <img src="/img/logo.webp" alt="logo"/>
      </div>

      <div className="text-center mb-5">
        <span className={styles.grazing}>grazing boards + </span>
        <span className={`${styles.grazing} ${styles.pink}`}>grazing tables</span>
        <span className={styles.grazing}> + grazing boxes</span>
      </div>

      <div className={`container ${styles.triple}`}>
        <div className="row">
          <div className="col">
            <img className={styles.col_img} src="/img/home-left.webp" alt="home-left"/>
          </div>
          <div className={`col d-flex align-items-center ${styles.bg_pink} ${styles.variety}`}>
            <div className={`${styles.middle}`}>
              <p className={styles.line}>a variety of handcrafted</p>
              <p className={`${styles.line} ${styles.em}`}>
                boards, tables + boxes-
              </p>
              <p className={styles.line}>
                all designed to fit
              </p>
              <p>your
                <span className={styles.white}> unique </span>
                style
              </p>
              <p className="text-center">
                <a className={`btn btn-light ${styles.get_pricing}`}>
                  Get Pricing
                </a>
              </p>
            </div>
          </div>
          <div className="col">
            <img className={styles.col_img} src="/img/home-right.webp" alt="home-right"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
