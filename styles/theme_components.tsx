/**
 * Created on Wed Apr 10 2019
 * Copyright (c) 2019 Starky's club
 * @author Václav Brzezina
 */

import * as React from 'react';
import styled, { createGlobalStyle, theme, ThemeProvider } from './theme';
import CopyToClipboard from 'react-copy-to-clipboard';
import main from './main';
import 'react-multi-carousel/lib/styles.css';
import { appWithTranslation } from '../i18n';

const StyleGuideStyles = createGlobalStyle`
    ${main}
`;

// @ts-ignore
const getColor = (props) => theme.colors[props.color];

const Clipboard = (props: any) => {
  return (
    <CopyToClipboard text={getColor(props)}>
      <div className={props.className} data-tooltip="Copy to clipboard">
        {props.children}
      </div>
    </CopyToClipboard>
  );
};

export const Color = styled(Clipboard)`
    margin-right: 28px;
    margin-bottom: 15px;
    text-align: center;
    float: left;
    cursor: pointer;
    font-size: 14px;

    &:last-of-type {
        margin-right: 0;
    }

    &:before {
        content: "${(props) => getColor(props)}";
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto 10px;
        padding: 33px 10px;
        box-sizing: border-box;
        border: 10px solid ${(props) => getColor(props)};
        font-size: 10px;
    }
`;

const Wrapper = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <StyleGuideStyles />
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default appWithTranslation(Wrapper);
