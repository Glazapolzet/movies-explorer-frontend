import React from 'react';
import './index.css';
import { CaptionWithLink } from 'entities/caption';
import {Promo} from "../components/Promo";

const App = () => {
  return (
    <>
      <Promo></Promo>
      <CaptionWithLink
        captionText={'About?'}
        linkText={'OOOO'}
        linkTo={'https://github.com/Glazapolzet/gnome/blob/dev-vypova-refactor/src/components/action-dot/ActionDot/ActionDot.tsx'}
      />
    </>
  );
}

export default App;
