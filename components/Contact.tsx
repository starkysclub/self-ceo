import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';
import Form from './Form/Form';
import Input from './Form/Input';
import TextArea from './Form/TextArea';
import { FormikConfig } from 'formik';

interface ContactTemplateProps extends WithTranslation {}

const ContactTemplate: SC<ContactTemplateProps> = ({ className, t }) => {
  const onSubmit = () => console.info('test');
  const initialValues = {};

  const config: FormikConfig<any> = {
    initialValues,
    onSubmit,
  };

  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2 className="title">{t('contact.title')}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}>
            <Form config={config}>
              <Input name="name" placeholder={t('contact.fields.name')} />
              <Input name="email" placeholder={t('contact.fields.email')} />
              <Input name="topic" placeholder={t('contact.fields.topic')} />
              <TextArea name="message" placeholder={t('contact.fields.message')} />
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
`;

export default withTranslation('common')(Contact);
