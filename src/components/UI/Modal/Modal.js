import React from 'react';

import classes from './Modal.css';
import Aox from '../../../hoc/Aox/Aox';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  // shouldComponentUpdate ( nextProps, nextState ) {
  //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  // }

  return (
    <Aox>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aox>
  );
};

export default React.memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
