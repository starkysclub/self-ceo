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

const EULA: NextPage<HompeageProps> = () => {
  return (
    <>
      <Navigation />
      <Page>
        <Section>
          <Grid>
            <Row>
              <Col xs={12}>
                <T tag="h1" className="as-h2" id="eula.title" />
                <T tag="p" id="eula.p1" />

                <T tag="h3" id="eula.agreement.title" />
                <T tag="p" id="eula.agreement.p1" />
                <T tag="p" id="eula.agreement.p2" />
                <T tag="p" id="eula.agreement.p3" />
                <T tag="p" id="eula.agreement.p4" />
                <p>
                  <T tag="strong" id="eula.agreement.p5.bold" /> <T id="eula.agreement.p5.rest" />
                </p>

                <T tag="h3" id="eula.age-requirement.title" />
                <T tag="p" id="eula.age-requirement.p1" />
                <T tag="p" id="eula.age-requirement.p2" />

                <T tag="h3" id="eula.grand-of-license.title" />
                <T tag="p" id="eula.grand-of-license.p1" />

                <T tag="h3" id="eula.other-rights.title" />
                <br />
                <T tag="h4" id="eula.other-rights.restricted-use.title" />
                <T tag="p" id="eula.other-rights.restricted-use.p1" />
                <T tag="p" id="eula.other-rights.restricted-use.p2" />

                <T tag="h4" id="eula.other-rights.updates.title" />
                <T tag="p" id="eula.other-rights.updates.p1" />

                <T tag="h4" id="eula.other-rights.access.title" />
                <T tag="p" id="eula.other-rights.access.p1" />

                <T tag="h4" id="eula.other-rights.purchases.title" />
                <T tag="p" id="eula.other-rights.purchases.p1" />
                <T tag="p" id="eula.other-rights.purchases.p2" />

                <T tag="h4" id="eula.other-rights.subscription.title" />
                <T tag="p" id="eula.other-rights.subscription.p1" />

                <T tag="h4" id="eula.other-rights.trial.title" />
                <T tag="p" id="eula.other-rights.trial.p1" />

                <T tag="h4" id="eula.other-rights.online.title" />
                <T tag="p" id="eula.other-rights.online.p1" />

                <T tag="h3" id="eula.subscription.title" />
                <T tag="p" id="eula.subscription.p1" />
                <T tag="p" id="eula.subscription.p2" />
                <T tag="p" id="eula.subscription.p3" />
                <ol>
                  <T tag="li" id="eula.subscription.li1" />
                  <T tag="li" id="eula.subscription.li2" />
                </ol>
                <T tag="p" id="eula.subscription.p4" />
                <T tag="p" id="eula.subscription.p5" />
                <T tag="p" id="eula.subscription.p6" />

                <T tag="h3" id="eula.functionality.title" />
                <T tag="p" id="eula.functionality.p1" />

                <T tag="h3" id="eula.third-party.title" />
                <br />

                <T tag="h4" id="eula.third-party.services-and-content.title" />
                <T tag="p" id="eula.third-party.services-and-content.p1" />
                <T tag="p" id="eula.third-party.services-and-content.p2" />

                <T tag="h4" id="eula.third-party.access-to-services.title" />
                <T tag="p" id="eula.third-party.access-to-services.p1" />

                <T tag="h3" id="eula.security.title" />
                <T tag="p" id="eula.security.p1" />

                <T tag="h3" id="eula.registration-and-passwords.title" />
                <br />

                <T tag="h4" id="eula.registration-and-passwords.registration.title" />
                <T tag="p" id="eula.registration-and-passwords.registration.p1" />
                <T tag="p" id="eula.registration-and-passwords.registration.p2" />

                <T tag="h4" id="eula.registration-and-passwords.passwords.title" />
                <T tag="p" id="eula.registration-and-passwords.passwords.p1" />

                <T tag="h4" id="eula.registration-and-passwords.provided-information.title" />
                <T tag="p" id="eula.registration-and-passwords.provided-information.p1" />

                <T tag="h3" id="eula.consent-to-use-data.title" />
                <T tag="p" id="eula.consent-to-use-data.p1" />

                <T tag="h3" id="eula.intelectual-property.title" />
                <T tag="p" id="eula.intelectual-property.p1" />
                <T tag="p" id="eula.intelectual-property.p2" />

                <T tag="h3" id="eula.copyright.title" />
                <br />

                <T tag="h4" id="eula.copyright.general.title" />
                <T tag="p" id="eula.copyright.general.p1" />

                <T tag="h4" id="eula.copyright.notice.title" />
                <T tag="p" id="eula.copyright.notice.p1" />
                <T tag="p" id="eula.address.line1" />
                <T tag="p" id="eula.address.line2" />
                <T tag="p" id="eula.address.line3" />
                <T tag="p" id="eula.copyright.notice.p2" />

                <ol>
                  <T tag="li" id="eula.copyright.notice.li1" />
                  <T tag="li" id="eula.copyright.notice.li2" />
                  <T tag="li" id="eula.copyright.notice.li3" />
                  <T tag="li" id="eula.copyright.notice.li4" />
                  <T tag="li" id="eula.copyright.notice.li5" />
                  <T tag="li" id="eula.copyright.notice.li6" />
                </ol>

                <T tag="h4" id="eula.copyright.objectionable-content.title" />
                <ol>
                  <T tag="li" id="eula.copyright.objectionable-content.li1" />
                  <T tag="li" id="eula.copyright.objectionable-content.li2" />
                  <T tag="li" id="eula.copyright.objectionable-content.li3" />
                  <T tag="li" id="eula.copyright.objectionable-content.li4" />
                  <T tag="li" id="eula.copyright.objectionable-content.li5" />
                  <T tag="li" id="eula.copyright.objectionable-content.li6" />
                  <T tag="li" id="eula.copyright.objectionable-content.li7" />
                  <T tag="li" id="eula.copyright.objectionable-content.li8" />
                </ol>

                <T tag="h4" id="eula.copyright.content-screening.title" />
                <T tag="p" id="eula.copyright.content-screening.p1" />
                <T tag="p" id="eula.copyright.content-screening.p2" />

                <T tag="h4" id="eula.copyright.ownership-of-content.title" />
                <T tag="p" id="eula.copyright.ownership-of-content.p1" />

                <T tag="h4" id="eula.copyright.repeat-infringer.title" />
                <T tag="p" id="eula.copyright.repeat-infringer.p1" />

                <T tag="h3" id="eula.termination.title" />
                <T tag="p" id="eula.termination.p1" />

                <T tag="h3" id="eula.warranty.title" />
                <T tag="p" id="eula.warranty.p1" />
                <T tag="p" id="eula.warranty.p2" />
                <T tag="p" id="eula.warranty.p3" />
                <T tag="p" id="eula.warranty.p4" />
                <T tag="p" id="eula.warranty.p5" />

                <T tag="h3" id="eula.liability.title" />
                <T tag="p" id="eula.liability.p1" />
                <T tag="p" id="eula.liability.p2" />

                <T tag="h3" id="eula.indemnification.title" />
                <T tag="p" id="eula.indemnification.p1" />

                <T tag="h3" id="eula.export-controls.title" />
                <T tag="p" id="eula.export-controls.p1" />

                <T tag="h3" id="eula.jurisdictional-issues.title" />
                <T tag="p" id="eula.jurisdictional-issues.p1" />
                <T tag="p" id="eula.jurisdictional-issues.p2" />
                <T tag="p" id="eula.jurisdictional-issues.p3" />

                <T tag="h3" id="eula.supplemental-terms.title" />
                <T tag="p" id="eula.supplemental-terms.p1" />

                <T tag="h4" id="eula.supplemental-terms.appstore.title" />
                <T tag="p" id="eula.supplemental-terms.appstore.p1" />
                <ol>
                  <T tag="li" id="eula.supplemental-terms.appstore.li1" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li2" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li3" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li4" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li5" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li6" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li7" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li8" />
                  <T tag="li" id="eula.supplemental-terms.appstore.li9" />
                </ol>

                <T tag="h3" id="eula.contact-us.title" />
                <T tag="p" id="eula.contact-us.p1" />
                <T tag="p" id="eula.address.line1" />
                <T tag="p" id="eula.address.line2" />
                <T tag="p" id="eula.address.line3" />

                <p>&nbsp;</p>
                <p>
                  <T tag="strong" id="eula.since" />
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

export default withTranslation('common')(EULA);
