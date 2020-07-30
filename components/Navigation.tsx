import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface NavigationTemplateProps extends WithTranslation {}

const NavigationTemplate: SC<NavigationTemplateProps> = ({ className }) => {
  return (
    <div className={className}>
      <Grid>
        <Row>
          <Col md={6}>
            <div>
              <h1>Self-CEO</h1>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

const Navigation = styled(NavigationTemplate)``;

export default withTranslation('common')(Navigation);
