import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './footer.styles';

interface Props {
  className?: string;
}

export const Footer: React.FunctionComponent<Props> = props => {
  const { className } = props;
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.line} />
      <footer className={classes.footer}>
        Copyright 2020 Juan Carlos Fuentes Lamas. Todos los derechos reservados.
      </footer>
    </div>
  );
};
