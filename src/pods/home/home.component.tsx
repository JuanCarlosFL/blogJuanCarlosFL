import React from 'react';
import Image from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { routes } from 'core/routes';
import * as classes from './home.styles';

const query = graphql`
  query {
    homeLogo: file(relativePath: { eq: "yo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export const Home: React.FunctionComponent = () => {
  const { homeLogo } = useStaticQuery(query);
  return (
    <div className={classes.root}>
      <Typography variant="h3">Bienvenido a mi sitio web</Typography>
      <div className={classes.imageContainer}>
        <Image fluid={homeLogo.childImageSharp.fluid} />
      </div>
      <Typography variant="subtitle1">
        Javascript | React | .Net | SQL
      </Typography>

      <Typography variant="h4">
        Echa un vistazo a mi <Link to={routes.blog}>blog</Link>
      </Typography>
    </div>
  );
};
