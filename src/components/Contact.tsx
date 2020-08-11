import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../app/i18n';

interface ContactTemplateProps extends WithTranslation {}

const ContactTemplate: SC<ContactTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className} id="contact">
      <Grid>
        <Row>
          <Col xs={12}>
            <h2 className="title">{t('contact.title')}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="image" />
          </Col>
          <Col xs={12} md={6}>
            <form name="contact-us" method="POST" data-netlify="true" action="/">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Your Role:{' '}
                  <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Contact = styled(ContactTemplate)`
  .title {
    text-align: center;
    margin-bottom: 5rem;
  }
  .image {
    width: 100%;
    height: 90vw;
    background: url('/images/contact.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      width: 420px;
      height: 440px;
      margin: 0 auto;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}rem) {
      width: 500px;
    }
  }

  button {
    max-width: 100% !important;
  }
`;

export default withTranslation('common')(Contact);
