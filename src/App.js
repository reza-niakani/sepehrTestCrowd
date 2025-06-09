/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import RoutsComponent from 'comon/Routs/RoutesCompnent';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from 'comon/context/MainContext';
import { AuthCheck } from 'comon/Routs/setting/AuthCheck';
import MainStructurePages from 'comon/pageStructures/MainStructurePages';
import ScrollToTop from 'comon/GlobalyTools/ScrollToTop';

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <ToastContainer
          transition={Flip}
          position={'bottom-center'}
          rtl={true}
          onClick={() => toast.dismiss()}
          style={{ maxWidth: '90vw' }}
        />
        <AuthCheck>
          <MainStructurePages>
            <ScrollToTop />
            <RoutsComponent />
          </MainStructurePages>
        </AuthCheck>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
