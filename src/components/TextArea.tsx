import { Field, FieldAttributes } from 'formik';
import styled, { SC } from '../styles/theme';

interface TextAreaProps extends FieldAttributes<any> {}

const TextAreaTemplate: SC<TextAreaProps> = (props) => {
  return <Field component="textarea" {...props} />;
};

const TextArea = styled(TextAreaTemplate)`
  display: flex;
  background: #ffffff;
  /* Light Black */

  border: 1px solid #7a7580;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 0.6rem 1rem 0.5rem;
  margin: 1rem 0;
  width: 100%;
  min-height: 130px;
  font-size: ${({ theme }) => theme.fontSizes.textBase};
  line-height: ${({ theme }) => theme.lineHeights.textBase};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default TextArea;
