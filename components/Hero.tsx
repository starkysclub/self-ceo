import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { LinkButton } from './Button';
import Android from '../public/images/android.svg';
import Apple from '../public/images/apple.svg';
import useMobileDetect from '../hooks/useMobileDetect';

interface HeroTemplateProps extends WithTranslation {}

const HeroTemplate: SC<HeroTemplateProps> = ({ className, t }) => {
  const currentDevice = useMobileDetect();

  return (
    <Section className={className}>
      <Grid style={{ position: 'relative' }}>
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="circle-3" />
        <Row>
          <Col xs={12} sm={12} smOffset={1} md={6} mdOffset={0} lg={7} lgOffset={0}>
            <div className="content">
              <h2 className="as-h1">{t('hero.title')}</h2>
              <p>{t('hero.description')}</p>
              <div className="download-buttons hide visible-md">
                <LinkButton
                  href={
                    currentDevice.isAndroid() ? process.env.NEXT_PUBLIC_GOOGLE_PLAY : process.env.NEXT_PUBLIC_APP_STORE
                  }
                  secondary={currentDevice.isAndroid() || currentDevice.isIos()}
                >
                  Download {currentDevice.isAndroid() ? <Android /> : <Apple />}
                </LinkButton>
                {!currentDevice.isMobile() && (
                  <LinkButton href={process.env.NEXT_PUBLIC_GOOGLE_PLAY} secondary>
                    Download <Android />
                  </LinkButton>
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="image"></div>

            <div className="download-buttons hide-md">
              <LinkButton
                href={
                  currentDevice.isAndroid() ? process.env.NEXT_PUBLIC_GOOGLE_PLAY : process.env.NEXT_PUBLIC_APP_STORE
                }
                secondary={currentDevice.isAndroid() || currentDevice.isIos()}
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
      </Grid>
    </Section>
  );
};

const Hero = styled(HeroTemplate)`
  overflow: hidden;
  padding-top: 2rem !important;
  margin-bottom: -2rem;

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
    min-height: 1000px;
  }

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
    margin-bottom: -20rem;

    @media (orientation: portrait) {
      margin-bottom: -28rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}rem) {
    padding-top: 5rem !important;
  }

  .content {
    max-width: 300px;
    margin: 0 auto;
    z-index: 9;
    position: relative;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 100%;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      height: 600px;

      @media (orientation: portrait) {
        height: 600px;
      }
    }

    .as-h1 {
      font-size: 3.5rem;
      line-height: 4.5rem;

      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
        font-size: ${({ theme }) => theme.fontSizes.h1};
        line-height: ${({ theme }) => theme.lineHeights.h1};
      }
    }
  }

  .download-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      margin-top: 0;
      flex-direction: row;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      margin-top: 1.2rem;
      justify-content: flex-start;
    }
  }

  .image {
    width: 100%;
    height: 75vw;
    background: url('/images/FreeiPhoneXr1.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    position: relative;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      position: absolute;
      width: 800px;
      height: 660px;
      top: -40px;
      right: -175px;
    }
  }
  .circle-1 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: -50px;
    top: -25px;
    /* Purple */
    border: 50px solid #62319e;
    opacity: 0.05;
    border-radius: 50%;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 617px;
      height: 617px;
      left: -170px;
      top: -30px;
      border-width: 150px;
    }
  }

  .circle-2 {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 150px;
    right: -100px;
    /* Yellow */
    border: 50px solid #ffb24d;
    opacity: 0.05;
    border-radius: 50%;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 732px;
      height: 732px;
      top: 20px;
      right: -200px;
      border-width: 150px;
    }
  }

  .circle-3 {
    position: absolute;
    width: 70px;
    height: 70px;
    left: 10px;
    bottom: -10px;

    /* Blue */

    border-radius: 50%;
    border: 20px solid #4dbfff;
    opacity: 0.08;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 224px;
      height: 224px;
      left: 130px;
      bottom: -340px;
      border-width: 50px;
    }
  }
`;

export default withTranslation('common')(Hero);
