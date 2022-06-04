import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aox from '../Aox/Aox';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aox>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aox>
    );
  };
};

export default withErrorHandler;
