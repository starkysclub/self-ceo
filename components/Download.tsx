import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface DownloadTemplateProps extends WithTranslation {}

const DownloadTemplate: SC<DownloadTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col>
            <h2>{t('download.title')}</h2>
            <p>{t('download.description')}</p>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Download = styled(DownloadTemplate)``;

export default withTranslation('common')(Download);
