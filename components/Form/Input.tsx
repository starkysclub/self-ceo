import { Field, FieldAttributes } from 'formik';
import styled, { SC } from '../../styles/theme';

interface InputProps extends FieldAttributes<any> {}

const InputTemplate: SC<InputProps> = (props) => {
  return <Field component="input" {...props} />;
};

const Input = styled(InputTemplate)`
  display: flex;
  background: #ffffff;
  /* Light Black */

  border: 1px solid #7a7580;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 0.6rem 1rem 0.5rem;
  margin: 1rem 0;
  width: 100%;
  font-size: 18px;
  line-height: 28px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
