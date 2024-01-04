import Head from 'next/head'
import styles from '../styles/Styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {NextRouter, useRouter} from "next/router";
import {Container, Nav, Navbar} from "react-bootstrap";
import {mkGoogleFormPostHandler} from "./google-forms";

type LayoutProps = {
  children: React.ReactNode
}

const routeTitles = {
  '/': 'HOME',
  '/about': 'ABOUT',
  '/gallery': 'MENU',
  '/monthly-special-holidays': 'MONTHLY SPECIALS + HOLIDAYS',
  '/pricing': 'FAQ',
  '/contact': 'ORDER',
}

const socialIcons = [
  {"name": "facebook", "url": "https://www.facebook.com/burgeandboard", "img": "/img/fb.webp"},
  {"name": "instagram", "url": "https://www.instagram.com/burgeandboard", "img": "/img/insta.webp"},
]

function getRouteTitle(router: NextRouter): String {
  let res = routeTitles[router.pathname];
  res = res ? res + ' | ' : '';
  res += 'Burge + Board';
  return res;
}

export default function Layout({children}: LayoutProps) {
  const router = useRouter();

  const [subscribeEmail, setSubscribeEmail] = useState("")

  let handleSubscribe = mkGoogleFormPostHandler({
    formId: '1FAIpQLSeaVSDC_huUEyiVfxyFhkUa7YHFCs5xoB6JMxO-6xrD9gD74g',
    getEntries: async () => {
      return {
        'entry.2079516414': subscribeEmail,
      }
    },
    precondition: async () => {
      return subscribeEmail.indexOf('@') > 0
    },
    onSuccess: async () => {
      // TODO: Better success popup
      alert("You've been added to our mailing list, please allow a few days for processing, thank you!")
    },
    onFailure: async () => {
      // TODO: Better error popup
      alert("Failed to add you to the mailing list; please review your information and try again.")
    }
  })

  return (
    <>
      <Head>
        <title>{getRouteTitle(router)}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>

        <Navbar expand="lg"
                sticky="top"
                className={`m-auto ${styles.nav}`}>
          <Container fluid={true}>
            <Navbar.Brand>
              {socialIcons.map(i =>
                <a key={i.name} href={i.url} className="">
                  <img alt={i.name} src={i.img}/>
                </a>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
              <Nav className="m-auto">
                {
                  Object.keys(routeTitles).map(k =>
                    <Nav.Link href={k}
                              key={routeTitles[k]}
                              className={`text-center p-4 ${router.pathname == k ? 'active' : ''}`}>
                      {routeTitles[k]}
                    </Nav.Link>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className={styles.content}>
          {children}
        </div>

        <div className="row justify-content-center">
          <div className={`p-5 col-md-4 ${styles.subscribe_for_updates}`}>
            <h2 className="text-center">Subscribe for Updates</h2>
            <input type="email"
                   className={`form-control mb-1 ${styles.subscribe_for_updates_email}`}
                   id="subscribe_for_updates_email"
                   placeholder="Email Address"
                   onChange={(e) => setSubscribeEmail(e.target.value)}
                   onKeyUp={(e) => {
                     if (e.key === "Enter") return handleSubscribe(e)
                   }}/>
            <p className="text-center">
              <a className={`btn btn-dark ${styles.subscribe_now_btn}`}
                 onClick={handleSubscribe}>
                Subscribe Now
              </a>
            </p>
          </div>
        </div>

        <footer className={`text-center p-3 ${styles.bg_pink}`}>
          <span>© 2023 Burge and Board</span>
        </footer>
      </main>
    </>
  )
}
