import { Field, FieldAttributes } from 'formik';
import styled, { SC } from '../styles/theme';
import ReactSelect from 'react-select';
import { Option } from 'react-select/src/filters';

interface SelectProps extends FieldAttributes<any> {
  options: Option[];
}

const SelectTemplate: SC<SelectProps> = (props) => {
  return <Field component={() => <ReactSelect {...props} classNamePrefix="select" />} {...props} />;
};

const Select = styled(SelectTemplate)`
  .select {
    &__control {
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

      &--is-focused {
        border-color: ${({ theme }) => theme.colors.primary} !important;
        box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary};
      }
    }
    &__option {
      &--is-focused {
        background: rgba(98, 49, 158, 0.2) !important;
      }
      &:hover {
        background: rgba(98, 49, 158, 0.1.5) !important;
      }
      &--is-selected {
        background: rgba(98, 49, 158, 1) !important;
        color: white;

        &:hover {
          background: rgba(98, 49, 158, 0.9) !important;
        }
      }
    }
  }
`;

export default Select;
