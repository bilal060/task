'use client';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import Financing from './components/Financing';
import PropertyDetails from './components/PropertyDetails';
import RentRoll from './components/RentRoll';
import Sidebar from './components/Sidebar';
import Success from './components/Success';
import TabContent from './components/TabContent';
import store from './redux/store';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Provider store={store}>
      <div>
        <div className="w-full flex flex-col md:flex-row">
          <div>
            <Sidebar activeStep={activeStep} />
          </div>
          <div className="w-full ">
            <TabContent id={0} activeStep={activeStep}>
              <PropertyDetails
                setActiveStep={setActiveStep}
                activeStep={activeStep}
              />
            </TabContent>
            <TabContent id={1} activeStep={activeStep}>
              <RentRoll setActiveStep={setActiveStep} activeStep={activeStep} />
            </TabContent>
            <TabContent id={2} activeStep={activeStep}>
              <Financing
                setActiveStep={setActiveStep}
                activeStep={activeStep}
              />
            </TabContent>
            <TabContent id={3} activeStep={activeStep}>
              <Success setActiveStep={setActiveStep} activeStep={activeStep} />
            </TabContent>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default HomePage;
