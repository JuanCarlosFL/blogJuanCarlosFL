import React from 'react';
import { PageRendererProps } from 'gatsby';
import { SEO } from 'common/components';
import { AppLayout } from 'layouts';
import { Blog } from 'pods/blog'

const BlogPage: React.FunctionComponent<PageRendererProps> = props => {
    const { location } = props;

  return (
    <AppLayout
      pathname={location.pathname}
      seoComponent={
      <SEO
        title="Blog"
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
     <Blog />
     </AppLayout>
  );
};

export default BlogPage;