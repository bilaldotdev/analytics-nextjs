import { WithAuth } from 'lib/authentication';
import React from 'react';

const PvtUsers = () => {
  return (
    <WithAuth redirect='/public-users'>
      <div>
        <div>
          <div className='container mx-auto'>
            <div
              id='section1'
              className='h-[22rem] my-8 bg-purple-400 rounded text-white md p-12'
            >
              Private Users
            </div>
          </div>
        </div>
      </div>
    </WithAuth>
  );
};

export default PvtUsers;
