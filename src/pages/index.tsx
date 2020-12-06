import React from 'react';
import { css } from '@emotion/css';
import { SEO } from 'common/components';

const root = (color) => css`
  background-color: ${color};
  color: white;
  font-size: 4rem;
  font-family: 'Open Sans';
  padding: 2rem;
`;

const IndexPage = () => {
   return (
     <>
       <SEO
         title="Home"
         keywords={[
           'Juan Carlos Fuentes Lamas',
           'JuanCarlosFL',
           'blog',
           'csharp',
           'javascript',
           'typescript',
           '.net 5',
         ]}
       />
       <div className={root('tomato')}>Hello from Gatsby</div>
     </>
   );
 };

export default IndexPage;