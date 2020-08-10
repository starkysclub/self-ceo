import { withTranslation, WithTranslation } from '../i18n';
import { FC } from 'react';

interface TranslationProps extends WithTranslation {
  id: string;
  tag?: any;
  className?: string;
}

const T: FC<TranslationProps> = ({ t, id, tag: Tag = 'span', className }) => {
  const text = t(id);
  console.info(id, text);
  if (text !== id) {
    return <Tag className={className}>{text}</Tag>;
  } else return null;
};

export default withTranslation('common')(T);
