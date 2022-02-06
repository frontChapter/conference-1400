import "styles/globals.scss";
import jump from "utils/jump";
import { useEffect } from "react";
import type { AppProps } from "next/app";

declare global {
  interface Window {
    jump: typeof jump;
    jumping: boolean;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.jump = jump;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
