import "@/styles/globals.css";
import {
  Lora,
  Bebas_Neue,
  Yusei_Magic,
  Zen_Tokyo_Zoo,
  Changa_One,
} from "@next/font/google";
const lora = Lora({
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const yusei = Yusei_Magic({
  subsets: ["latin-ext"],
  weight: ["400"],
});
const tokyo = Zen_Tokyo_Zoo({
  subsets: ["latin"],
  weight: ["400"],
});
const changa = Changa_One({
  subsets: ["latin"],
  weight: ["400"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
            --bebas-font: ${bebas.style.fontFamily};
            --yusei-font: ${yusei.style.fontFamily};
            --tokyo-font: ${tokyo.style.fontFamily};
            --changa-font: ${tokyo.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
