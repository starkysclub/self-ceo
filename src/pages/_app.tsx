import App from 'next/app';
import { appWithTranslation } from '../app/i18n';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import main from '../styles/main';
const GlobalStyles = createGlobalStyle`${main}`;

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext: any) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
