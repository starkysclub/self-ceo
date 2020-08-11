import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../app/i18n';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import { FormikConfig } from 'formik';
import { Button } from './Button';

interface ContactTemplateProps extends WithTranslation {}

const ContactTemplate: SC<ContactTemplateProps> = ({ className, t }) => {
  const onSubmit = () => console.info('test');
  const initialValues = {};

  const config: FormikConfig<any> = {
    initialValues,
    onSubmit,
  };

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
            <Form config={config}>
              <Input name="name" placeholder={t('contact.fields.name')} />
              <Input name="email" placeholder={t('contact.fields.email')} />
              <Input name="topic" placeholder={t('contact.fields.topic')} />
              <TextArea name="message" placeholder={t('contact.fields.message')} />
              <Button>Send</Button>
            </Form>
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