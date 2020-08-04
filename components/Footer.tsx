import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { rem } from 'polished';
import { LinkButton } from './Button';
import Android from '../public/images/android.svg';
import Apple from '../public/images/apple.svg';
import useMobileDetect from '../hooks/useMobileDetect';

interface FooterTemplateProps extends WithTranslation {}

const FooterTemplate: SC<FooterTemplateProps> = ({ className, t }) => {
  const currentDevice = useMobileDetect();

  return (
    <Section className={className} colored>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <div className="brand">
              <div className="logo"></div>
              <h2>{t('footer.title')}</h2>
            </div>

            <p className="description">{t('footer.description')}</p>
          </Col>
          <Col xs={12} md={7} mdOffset={1}>
            <Row className="links">
              <Col md={4}>
                <h4>{t('footer.importantLinks')}</h4>
                <ul>
                  <li>
                    <a href="#">{t('footer.terms')}</a>
                  </li>
                  <li>
                    <a href="#">{t('footer.privacy')}</a>
                  </li>
                  <li>
                    <a href="#">{t('footer.company')}</a>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <h4>{t('footer.menu')}</h4>
                <ul>
                  <li>
                    <a href="#home">{t('navigation.home')}</a>
                  </li>
                  <li>
                    <a href="#features">{t('navigation.features')}</a>
                  </li>
                  <li>
                    <a href="#contact">{t('navigation.contact')}</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <h4 className="text-left hide visible-md">{t('footer.download')}</h4>
                <div className="download-buttons">
                  <LinkButton
                    href={
                      currentDevice.isAndroid()
                        ? process.env.NEXT_PUBLIC_GOOGLE_PLAY
                        : process.env.NEXT_PUBLIC_APP_STORE
                    }
                    secondary={!currentDevice.isMobile()}
                  >
                    Download {currentDevice.isAndroid() ? <Android /> : <Apple />}
                  </LinkButton>
                  {!currentDevice.isMobile() && (
                    <LinkButton href={process.env.NEXT_PUBLIC_GOOGLE_PLAY} secondary>
                      Download <Android />
                    </LinkButton>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="copyright">
              {t('footer.copyright-1')}
              <a href="http://starkysclub.com/">Starky&apos;s club</a>
              {t('footer.copyright-2')}
            </div>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Footer = styled(FooterTemplate)`
  .brand {
    display: flex;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      justify-content: flex-start;
    }

    h2 {
      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
        font-size: 2.8rem;
        line-height: 3.8rem;
      }
      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
        line-height: 4.5rem;
      }
    }
  }
  .logo {
    width: 38px;
    height: 38px;
    background: url('/images/AppIconBig.png');
    background-size: contain;
    margin-right: 0.7rem;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      width: 50px;
      height: 50px;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 70px;
      height: 70px;
    }
  }

  .description {
    color: ${({ theme }) => theme.colors.grey3};
    font-size: ${rem('18px')};
    line-height: ${rem('30px')};
  }

  h4 {
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;
    text-align: left;
  }

  .links {
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      margin-top: 0.5rem;
      justify-content: flex-start;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
      text-align: left;

      li {
        margin: 1rem 0;

        a,
        a:active,
        a:visited {
          font-family: Jost;
          font-style: normal;
          font-weight: normal;
          letter-spacing: 0.5px;
          color: ${({ theme }) => theme.colors.default};
          text-decoration: none;

          &:hover,
          &.active {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  .download-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
    }
  }

  .copyright {
    text-align: center;
    margin: 4rem 0 0;
    padding: 4rem 0 0;
    border-top: 1px solid #ede8f5;
    line-height: 24px;
  }
`;

export default withTranslation('common')(Footer);
