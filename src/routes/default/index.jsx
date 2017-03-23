import React from 'react';
import Default from './Default';

export const route = {
  path: ['/', '/:selected'],
  action: ({ history }) => ({
    component: (
      <Default
        history={history}
      />
    ),
  }),
};

export default {
  route,
};
