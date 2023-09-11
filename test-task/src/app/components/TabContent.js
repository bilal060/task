import React from 'react';

const TabContent = ({ id, activeStep, children }) => {
  return activeStep === id ? (
    <div className="TabContent w-full h-full">{children}</div>
  ) : null;
};

export default TabContent;
