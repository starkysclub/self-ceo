import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface HeroTemplateProps extends WithTranslation {}

const HeroTemplate: SC<HeroTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col xs={12} md={5} mdOffset={1}>
            <div className="content">
              <h2>{t('hero.title')}</h2>
              <p>{t('hero.description')}</p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="image"></div>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Hero = styled(HeroTemplate)``;

export default withTranslation('common')(Hero);
