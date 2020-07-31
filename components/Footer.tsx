import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { rem } from 'polished';

interface FooterTemplateProps extends WithTranslation {}

const FooterTemplate: SC<FooterTemplateProps> = ({ className, t }) => {
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
            <Row>
              <Col xs={12} md={4}>
                <h4>{t('footer.importantLinks')}</h4>
                <ul>
                  <li>
                    <a href="#">{t('footer.terms')}</a>
                  </li>
                  <li>
                    <a href="#">{t('footer.privace')}</a>
                  </li>
                  <li>
                    <a href="#">{t('footer.company')}</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
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
                <h4>{t('footer.download')}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="copyright">{t('footer.copyright')}</div>
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
      line-height: 4.5rem;
    }
  }
  .logo {
    width: 70px;
    height: 70px;
    background: url('/images/AppIconBig.png');
    margin-right: 1rem;
  }

  .description {
    color: ${({ theme }) => theme.colors.grey3};
    font-size: ${({ theme }) => theme.fontSizes.textMedium};
    line-height: ${({ theme }) => theme.lineHeights.textMedium};
  }

  h4 {
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin: 1rem 0;

      a,
      a:active,
      a:visited {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: ${rem('18px')};
        line-height: ${rem('26px')};
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.colors.grey3};
        text-decoration: none;

        &:hover,
        &.active {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .copyright {
    text-align: center;
    margin: 4rem 0 -1rem;
    padding: 4rem 0 0;
    border-top: 1px solid #ede8f5;
  }
`;

export default withTranslation('common')(Footer);
