import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import SiteHeader from "./header";
import SiteFooter from "./footer";
import { useRouter } from "next/router";

const SEO = {
  title: "Homepage",
  description: "Food halal",
  image: "/who-banner.png",
  url: "/",
  noIndex: false,
};

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("pixel ID here");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

const Site = (props) => {
  const { seo = SEO, isHome = false, isLogin = false, children } = props;
  const [show, setShow] = useState(false);
  console.log(show, "<<Apa");
  useEffect(() => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);
  // const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{seo.title}</title>
        <link rel='icon' href='/favicon-picaso.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content={seo.description} key='description' />
        <meta name='keywords' content='{keywords}' />
        <meta
          name='twitter:card'
          content='summary_large_image'
          key='twitter:card'
        />
        <meta property='og:url' content={seo.url} key='og:url' />
        <meta property='og:title' content={seo.title} key='og:title' />
        <meta
          property='og:description'
          content={seo.description}
          key='og:description'
        />
        <meta property='og:image' content={seo.image} key='og:image' />
        <link rel='canonical' href={seo.url} />
        {seo.noIndex && (
          <>
            <meta name='robots' content='noindex'></meta>
            <meta name='googlebot' content='noindex'></meta>
          </>
        )}
      </Head>
      <div>
        {/* <Link href='#' scroll={true}>
          <div id='myBtn' title='Go to top'>
            Top
          </div>
        </Link> */}
        <ScrollToTop
          smooth
          style={{
            backgroundColor: "#d02532",
            width: "70px",
            height: "70px",
            color: "White",
          }}
          component={<h2>TOP</h2>}
        />
        <FacebookPixel />
        <SiteHeader isHome={isHome} isLogin={isLogin} />
        <main role='main'>{children}</main>
        {/* <SiteFooter /> */}
      </div>
    </>
  );
};

export default Site;
