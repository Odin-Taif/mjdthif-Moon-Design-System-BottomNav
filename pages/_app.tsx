import "../styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "../components/bottomNavigation/bottomNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BottomNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
