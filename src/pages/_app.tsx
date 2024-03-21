import { CarProvider } from "@/viewmodel/CarContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CarProvider>
      <Component {...pageProps} />
    </CarProvider>
  )
}
