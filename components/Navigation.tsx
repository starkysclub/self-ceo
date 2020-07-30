import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { rem } from 'polished';

interface NavigationTemplateProps extends WithTranslation {}

const NavigationTemplate: SC<NavigationTemplateProps> = ({ className, t }) => {
  return (
    <nav className={className}>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <div className="navbar-header">
              <div className="navbar-logo"></div>
              <h1 className="navbar-brand">{t('navigation.brand')}</h1>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <ul className="navbar-nav">
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
        </Row>
      </Grid>
    </nav>
  );
};

const Navigation = styled(NavigationTemplate)`
  padding: ${rem('20px')} 0;

  .navbar-header {
    display: flex;
    padding: ${rem('8px')} 0;

    .navbar-logo {
      width: 44px;
      height: 44px;
      background-image: url('/images/AppIconSmall.png');
    }

    .navbar-brand {
      font-size: 1.7rem;
      line-height: 2.9rem;
      font-family: ${({ theme }) => theme.fonts.fontHeadings};
    }
  }
  .navbar-nav {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;

    li a,
    li a:active,
    li a:visited {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: ${rem('18px')};
      line-height: ${rem('26px')};
      letter-spacing: 0.5px;
      padding: 0 2rem;
      color: ${({ theme }) => theme.colors.default};
      text-decoration: none;

      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default withTranslation('common')(Navigation);
