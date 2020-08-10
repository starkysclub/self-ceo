import { withTranslation } from '../i18n';
import { NextPage } from 'next';
import { WithTranslation } from 'next-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Page from '../components/Page';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import T from '../components/T';

interface HompeageProps extends WithTranslation {}

const Privacy: NextPage<HompeageProps> = () => {
  return (
    <>
      <Navigation />
      <Page>
        <Section>
          <Grid>
            <Row>
              <Col xs={12}>
                <T tag="h1" className="as-h2" id="policy.intro.h1" />
                <T tag="p" id="policy.intro.p1" />
                <T tag="p" id="policy.intro.p2" />
                <T tag="p" id="policy.intro.p3" />
                <T tag="p" id="policy.intro.p4" />
                <T tag="p" id="policy.intro.p5" />

                <T tag="h3" id="policy.what.h1" />
                <T tag="p" id="policy.what.p1" />
                <T tag="p" id="policy.what.p2" />

                <T tag="h4" id="policy.registration.h1" />

                <ol>
                  <T tag="li" id="policy.what.registration.li1" />
                  <T tag="li" id="policy.what.registration.li2" />
                  <T tag="li" id="policy.what.registration.li3" />
                  <T tag="li" id="policy.what.registration.li4" />
                  <T tag="li" id="policy.what.registration.li5" />
                  <T tag="li" id="policy.what.registration.li6" />
                  <T tag="li" id="policy.what.registration.li7" />
                </ol>

                <T tag="h4" id="policy.what.integrated.h1" />
                <T tag="p" id="policy.what.integrated.p1" />
                <T tag="p" id="policy.what.integrated.p2" />

                <T tag="h4" id="policy.what.automated.h1" />
                <T tag="p" id="policy.what.automated.p1" />
                <T tag="p" id="policy.what.automated.p2" />
                <T tag="p" id="policy.what.automated.p3" />
                <T tag="p" id="policy.what.automated.p4" />
                <T tag="p" id="policy.what.automated.h2" />

                <ul>
                  <T tag="li" id="policy.what.automated.li1" />
                  <T tag="li" id="policy.what.automated.li2" />
                  <T tag="li" id="policy.what.automated.li3" />
                  <T tag="li" id="policy.what.automated.li4" />
                  <T tag="li" id="policy.what.automated.li5" />
                  <T tag="li" id="policy.what.automated.li6" />
                  <T tag="li" id="policy.what.automated.li7" />
                  <T tag="li" id="policy.what.automated.li8" />
                </ul>

                <T tag="h3" id="policy.why.title" />
                <T tag="p" id="policy.why.p1" />

                <p>
                  <T tag="strong" id="policy.why.services.title" />
                </p>
                <T tag="p" id="policy.why.services.p1" />
                <T tag="p" id="policy.why.services.p2" />

                <p>
                  <T tag="strong" id="policy.why.research.title" />
                </p>
                <T tag="p" id="policy.why.research.p1" />
                <T tag="p" id="policy.why.research.p2" />
                <T tag="p" id="policy.why.research.p3" />

                <p>
                  <T tag="strong" id="policy.why.audit.title" />
                </p>
                <T tag="p" id="policy.why.audit.p1" />
                <T tag="p" id="policy.why.audit.p2" />

                <p>
                  <T tag="strong" id="policy.why.security.title" />
                </p>
                <T tag="p" id="policy.why.security.p1" />
                <T tag="p" id="policy.why.security.p2" />

                <p>
                  <T tag="strong" id="policy.why.debug.title" />
                </p>
                <T tag="p" id="policy.why.debug.p1" />

                <p>
                  <T tag="strong" id="policy.why.marketing.title" />
                </p>
                <T tag="p" id="policy.why.marketing.p1" />

                <p>
                  <T tag="strong" id="policy.why.maintanance.title" />
                </p>
                <T tag="p" id="policy.why.maintanance.li1" />
                <T tag="p" id="policy.why.maintanance.li2" />

                <p>
                  <T tag="strong" id="policy.why.tracking.title" />
                </p>

                <p>
                  <T tag="strong" id="policy.why.protecting.title" />
                </p>

                <p>
                  <T tag="strong" id="policy.why.other.title" />
                </p>
                <T tag="p" id="policy.why.p2" />

                <T tag="h3" id="policy.legal-basis.title" />
                <T tag="p" id="policy.legal-basis.p1" />

                <ol>
                  <T tag="li" id="policy.legal-basis.li1" />
                  <T tag="li" id="policy.legal-basis.li2" />
                  <T tag="li" id="policy.legal-basis.li3" />
                  <T tag="li" id="policy.legal-basis.li4" />
                  <T tag="li" id="policy.legal-basis.li5" />
                  <T tag="li" id="policy.legal-basis.li6" />
                  <T tag="li" id="policy.legal-basis.li7" />
                </ol>

                <T tag="p" id="policy.legal-basis.p2" />

                <T tag="h3" id="policy.sharing-with-others.title" />
                <T tag="p" id="policy.sharing-with-others.p1" />

                <T tag="h4" id="policy.sharing-with-others.third-party.title" />
                <T tag="p" id="policy.sharing-with-others.third-party.p1" />

                <p>
                  <strong>
                    <T id="policy.sharing-with-others.third-party.customer-communications.bold" />
                  </strong>{' '}
                  <span>
                    <T id="policy.sharing-with-others.third-party.customer-communications.rest" />
                  </span>
                </p>
                <p>
                  <strong>
                    <T id="policy.sharing-with-others.third-party.internal-insights.bold" />
                  </strong>{' '}
                  <span>
                    <T id="policy.sharing-with-others.third-party.internal-insights.rest" />
                  </span>
                </p>
                <p>
                  <strong>
                    <T id="policy.sharing-with-others.third-party.customer-support.bold" />
                  </strong>{' '}
                  <span>
                    <T id="policy.sharing-with-others.third-party.customer-support.rest" />
                  </span>
                </p>
                <p>
                  <strong>
                    <T id="policy.sharing-with-others.third-party.measurements.bold" />
                  </strong>{' '}
                  <span>
                    <T id="policy.sharing-with-others.third-party.measurements.rest" />
                  </span>
                </p>
                <T tag="p" id="policy.sharing-with-others.third-party.measurements.p2" />
                <p>
                  <strong>
                    <T id="policy.sharing-with-others.third-party.marketing.bold" />
                  </strong>{' '}
                  <span>
                    <T id="policy.sharing-with-others.third-party.marketing.rest" />
                  </span>
                </p>

                <T tag="h4" id="policy.sharing-with-others.corporate-transactions.title" />
                <T tag="p" id="policy.sharing-with-others.corporate-transactions.p1" />

                <T tag="h4" id="policy.sharing-with-others.international-data-transfers.title" />
                <T tag="p" id="policy.sharing-with-others.international-data-transfers.p1" />
                <T tag="p" id="policy.sharing-with-others.international-data-transfers.p2" />
                <ol>
                  <T tag="li" id="policy.sharing-with-others.international-data-transfers.li1" />
                  <T tag="li" id="policy.sharing-with-others.international-data-transfers.li2" />
                  <T tag="li" id="policy.sharing-with-others.international-data-transfers.li3" />
                  <T tag="li" id="policy.sharing-with-others.international-data-transfers.li4" />
                </ol>

                <T tag="h4" id="policy.sharing-with-others.legal-reasons.title" />
                <T tag="p" id="policy.sharing-with-others.legal-reasons.p1" />
                <T tag="p" id="policy.sharing-with-others.legal-reasons.p2" />
                <T tag="p" id="policy.sharing-with-others.legal-reasons.p3" />

                <T tag="h3" id="policy.protect-and-store.title" />
                <br />
                <T tag="h4" id="policy.protect-and-store.security.title" />
                <T tag="p" id="policy.protect-and-store.security.p1" />
                <T tag="p" id="policy.protect-and-store.security.p2" />
                <T tag="p" id="policy.protect-and-store.security.p3" />

                <T tag="h4" id="policy.protect-and-store.store.title" />
                <T tag="p" id="policy.protect-and-store.store.p1" />
                <T tag="p" id="policy.protect-and-store.store.p2" />
                <T tag="p" id="policy.protect-and-store.store.p3" />

                <T tag="h3" id="policy.your-rights.title" />
                <T tag="p" id="policy.your-rights.p1" />
                <ol>
                  <T tag="li" id="policy.your-rights.li1" />
                  <T tag="li" id="policy.your-rights.li2" />
                  <T tag="li" id="policy.your-rights.li3" />
                  <T tag="li" id="policy.your-rights.li4" />
                  <T tag="li" id="policy.your-rights.li5" />
                  <T tag="li" id="policy.your-rights.li6" />
                  <T tag="li" id="policy.your-rights.li7" />
                  <T tag="li" id="policy.your-rights.li8" />
                  <T tag="li" id="policy.your-rights.li9" />
                </ol>
                <T tag="p" id="policy.your-rights.p2" />
                <T tag="p" id="policy.your-rights.p3" />
                <T tag="p" id="policy.your-rights.p4" />

                <T tag="h3" id="policy.information-related-to-children.title" />
                <T tag="p" id="policy.information-related-to-children.p1" />

                <T tag="h3" id="policy.updates-to-our-policy.title" />
                <T tag="p" id="policy.updates-to-our-policy.p1" />

                <T tag="h3" id="policy.information-related-to-children.title" />
                <T tag="p" id="policy.information-related-to-children.p1" />
                <p>&nbsp;</p>
                <p>
                  <T tag="strong" id="policy.since" />
                </p>
              </Col>
            </Row>
          </Grid>
        </Section>
      </Page>
      <Footer />
    </>
  );
};

export default withTranslation('common')(Privacy);
