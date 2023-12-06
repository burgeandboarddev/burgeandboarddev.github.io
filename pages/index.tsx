import Head from 'next/head';
import {Container, Nav, Navbar} from "react-bootstrap";
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | Burge + Board</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}

        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,400italic"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Raleway:400,700bold"/>
      </Head>

      <main className={styles.main}>

        <nav className={`navbar navbar-expand-lg ${styles.nav}`}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarCenteredExample"
              aria-controls="navbarCenteredExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item p-3">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">MENU</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">MONTHLY SPECIALS + HOLIDAYS</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">FAQ</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="#">ORDER</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className={styles.content}>
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
                    all designed to fit your
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
        </div>

        <div className="p-5">
          {/* TODO: Subscribe for Updates */}
        </div>

        <footer className={`text-center p-3 ${styles.bg_pink}`}>
          <span>© 2023 Burge and Board</span>
        </footer>
      </main>
    </div>
  );
}
