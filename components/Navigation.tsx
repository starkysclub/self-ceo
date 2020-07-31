import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { rem } from 'polished';
import { useState } from 'react';

interface NavigationTemplateProps extends WithTranslation {}

const NavigationTemplate: SC<NavigationTemplateProps> = ({ className, t }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <nav className={className}>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <div className="navbar-header">
              <div className="navbar-logo"></div>
              <h1 className="navbar-brand">{t('navigation.brand')}</h1>
              <button className={`navbar-toggle${open ? ' open' : ''}`} onClick={toggleOpen}>
                <img src="/images/menu.svg" />
              </button>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <ul className={`navbar-nav${open ? ' open' : ''}`}>
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
      margin-right: 0.7rem;
      background-image: url('/images/AppIconSmall.png');
    }

    .navbar-brand {
      font-size: 1.7rem;
      line-height: 3.1rem;
      font-family: ${({ theme }) => theme.fonts.fontHeadings};
    }

    .navbar-toggle {
      background: transparent;
      border: none;
      margin-left: auto;

      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
        display: none;
      }
    }
  }
  .navbar-nav {
    display: none;
    justify-content: flex-end;
    list-style-type: none;
    flex-direction: column;
    padding-left: 0;

    &.open {
      display: flex;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      display: flex;
      flex-direction: row;
    }

    li a,
    li a:active,
    li a:visited {
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: ${rem('18px')};
      line-height: ${rem('40px')};
      letter-spacing: 0.5px;
      padding: 0 2rem;
      color: ${({ theme }) => theme.colors.default};
      text-decoration: none;

      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
        line-height: ${rem('26px')};
      }

      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default withTranslation('common')(Navigation);
