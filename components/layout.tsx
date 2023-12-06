import Head from 'next/head'
import styles from '../styles/Styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
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
                  <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item p-3">
                  <a className="nav-link" href="/about">ABOUT</a>
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
          {children}
        </div>

        <div className={`p-5 ${styles.subscribe_for_updates}`}>
          <h2>Subscribe for Updates</h2>
          <input type="email" className="form-control" id="subscribe_for_updates_email"
                 placeholder="Email Address"/>
          <p className="text-center">
            <a className={`btn btn-dark ${styles.subscribe_now_btn}`}>
              Subscribe Now
            </a>
          </p>
        </div>

        <footer className={`text-center p-3 ${styles.bg_pink}`}>
          <span>© 2023 Burge and Board</span>
        </footer>
      </main>
    </>
  )
}
