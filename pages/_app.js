import "../styles/globals.css";
import { useRouter } from "next/router";

function FacebookPixel() {
  const Router = useRouter();
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1027453168174179");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
      </Head>
      <FacebookPixel />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
