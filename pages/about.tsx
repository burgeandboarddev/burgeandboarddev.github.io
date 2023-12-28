import styles from '../styles/Styles.module.css';
import {NextPageWithLayout} from "./_app";
import Layout from "../components/layout";
import React from 'react';
import Head from "next/head";

const About: NextPageWithLayout = () => {
  return (
    <>
      <div className={`${styles.about_block} row text-center justify-content-center p-5 m-5`}>
        <h1>The Creator</h1>
        <hr/>
        <div>
          <b>CARRIE BURGE</b> - CHEESE LOVER, ARTIST, WIFE + DOG MOM
        </div>
        <div className="text-center p-4">
          <img src="/img/carrie.webp" alt="carrie" className={styles.carrie_img}/>
        </div>
        <div className={`col-md-5 ${styles.about_text}`}>
          In my early 20s, I discovered I had an intense love for food and entertaining. I started hosting parties for
          my
          friends and family- my main focus being on the food that was served. I loved making people feel full and happy
          and always wanted to be the perfect hostess!
          <br/>
          <br/>
          The spark of inspiration for the grazing boards and tables was born while I was on my honeymoon in Spain. I
          remember the first tapas bar I walked into - a massive spread of meats and cheeses and all things amazing! I
          was
          moved by the simplicity and convenience of this style of serving food. I came home and immediately made cheese
          and charcuterie boards my main focus! After many years, the boards continued to change and progress in every
          area from size to design. I now love to create simple, yet beautiful grazing boards and tables for all kinds
          of
          small gatherings, parties, and events.
          <br/>
          <br/>
          What I love most about these boards and tables is that the possibilities for creativity and uniqueness are
          absolutely endless. I have created a few custom boards that I think are fun and will fit most every style of
          grazer.
          <br/>
          <br/>
          -Carrie ❤
        </div>
      </div>
    </>
  );
}
export default About

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
