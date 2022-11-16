/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";

export default function Document() {
  return (
    <Html date-theme="cyberpunk">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
