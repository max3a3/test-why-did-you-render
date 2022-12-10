/// <reference types="@welldone-software/why-did-you-render" />
import wdyr from '@welldone-software/why-did-you-render';
import React from "react";
// import whyDidYouRender from "@welldone-software/why-did-you-render";
//
// whyDidYouRender(React, {
//   trackAllPureComponents: true,
// });




if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_WHY_DID_YOU_RENDER === 'true') {
debugger
  wdyr(React, {
    include: [/.*/],
    exclude: [/^BrowserRouter/, /^Link/, /^Route/],
    trackHooks: true,
    trackAllPureComponents: true,
  });
}