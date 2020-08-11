import { withTranslation, currentLocale } from '../app/i18n';
import { NextPage } from 'next';
import { WithTranslation } from 'next-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import ReactMarkdown from 'react-markdown';
import contentEN from '../../public/locales/en/privacy-policy.md';
import contentDE from '../../public/locales/de/privacy-policy.md';

interface PrivacyPolicyProps extends WithTranslation {}

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = () => {
  const content = (() => {
    if (currentLocale === 'en') {
      return contentEN;
    } else if (currentLocale === 'de') {
      return contentDE;
    }
  })();

  return (
    <>
      <Navigation />
      <Page>
        <Section>
          <Grid>
            <Row>
              <Col xs={12}>
                <ReactMarkdown source={content} />
              </Col>
            </Row>
          </Grid>
        </Section>
      </Page>
      <Footer />
    </>
  );
};

export default withTranslation('common')(PrivacyPolicy);
