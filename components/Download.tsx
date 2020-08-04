import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import { LinkButton } from './Button';
import Android from '../public/images/android.svg';
import Apple from '../public/images/apple.svg';
import useMobileDetect from '../hooks/useMobileDetect';

interface DownloadTemplateProps extends WithTranslation {}

const DownloadTemplate: SC<DownloadTemplateProps> = ({ className, t }) => {
  const currentDevice = useMobileDetect();

  return (
    <Section className={className} colored>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>{t('download.title')}</h2>
            <p>{t('download.description')}</p>
            <div className="download-buttons">
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

const Download = styled(DownloadTemplate)`
  text-align: center;
  justify-content: center;

  .download-buttons {
    margin-top: 3rem;
    justify-content: center;
    display: flex;
  }
`;

export default withTranslation('common')(Download);
