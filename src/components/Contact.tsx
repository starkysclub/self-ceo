import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../app/i18n';
import { useState } from 'react';

interface ContactTemplateProps extends WithTranslation {}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactTemplate: SC<ContactTemplateProps> = ({ className, t }) => {
  const [state, setState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: any) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e: any) => setState({ [e.target.name]: e.target.value } as any);

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
            <form onSubmit={handleSubmit}>
              <p>
                <label>
                  Your Name: <input type="text" name="name" value={state.name} onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" value={state.email} onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" value={state.message} onChange={handleChange} />
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
