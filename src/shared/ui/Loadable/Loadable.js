import React, { Suspense } from 'react';

export const Loadable = (Component) => {
  return function fn(props) {
    return (
      <Suspense
        fallback={
          <div>Loading</div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
}
