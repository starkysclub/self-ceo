import styled from 'styled-components';
import { Form as FormikForm, Formik, FormikConfig, FormikFormProps } from 'formik';
import { SC } from '../../styles/theme';

interface FormTemplateProps {
  config: FormikConfig<any>;
  formProps?: FormikFormProps;
}

const FormTemplate: SC<FormTemplateProps> = (props) => {
  return (
    <Formik {...props.config}>
      <FormikForm {...(props.formProps as any)}>{props.children}</FormikForm>
    </Formik>
  );
};

const Form = styled(FormTemplate)``;

export default Form;
