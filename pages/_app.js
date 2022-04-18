import '../styles/globals.css';
import '../styles/syntax-highlighting.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-netlify" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
