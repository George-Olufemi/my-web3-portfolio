import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <React.Fragment>
      <div className='h-screen w-screen overflow-hidden flex-col justify-center relative'>
        <div className="">
          <Spline scene="https://prod.spline.design/byrJM8w93RVNc-k9/scene.splinecode" />
        </div>
      </div>
      <div>hello</div>
    </React.Fragment>
  );
}

export default App;
