import styled from 'styled-components'
import {withTranslation } from '../i18n';
import { NextPage } from 'next';
import { WithTranslation } from 'next-i18next';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

interface HompeageProps extends WithTranslation {

}

const Homepage: NextPage<HompeageProps> = ({t, i18n}) => {

  console.info(i18n.language);
  
  return(
  <>
    <main>
      {process.env.NEXT_PUBLIC_LOCALE}
      <Title>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
      </Title>
    </main>
  </>
)};

export default withTranslation('common')(Homepage);