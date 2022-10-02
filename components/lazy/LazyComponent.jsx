import React from 'react';

const LazyComponent = () => {
  console.log(window.location, 'w-l');
  return <div>HtmlDom</div>;
};

export default LazyComponent;
