import { Field, FieldAttributes } from 'formik';
import styled, { SC } from '../styles/theme';
import ReactSelect from 'react-select';
import { Option } from 'react-select/src/filters';

interface SelectProps extends FieldAttributes<any> {
  options: Option[];
}

const SelectTemplate: SC<SelectProps> = (props) => {
  return <Field component={() => <ReactSelect {...props} />} {...props} />;
};

const Select = styled(SelectTemplate)`
  & > div {
    display: flex;
    background: #ffffff;
    /* Light Black */

    border: 1px solid #7a7580;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 0.2rem 1rem 0.2rem;
    margin: 1rem 0;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.textBase};
    line-height: ${({ theme }) => theme.lineHeights.textBase};

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default Select;
