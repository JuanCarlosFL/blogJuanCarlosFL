import React from 'react';
import { PageRendererProps } from 'gatsby';
import { SEO } from 'common/components';
import { AppLayout } from 'layouts';
import { Home } from 'pods/home';


const IndexPage: React.FunctionComponent<PageRendererProps> = props => {
   const { location } = props; // Ruta en la que nos encontramos actualmente

   return (
    <AppLayout
      pathname={location.pathname}
      seoComponent={
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
        }
        >
        <Home />
        </AppLayout>
   );
 };

export default IndexPage;