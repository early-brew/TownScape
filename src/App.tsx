import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import StorefrontWrapper from './StoreFront/StoreFrontWrapper';
import AboutUs from './StoreFront/AboutUs';
import Events from './StoreFront/Events'
import { LocationProvider } from './contexts/LocationContext';
import { LocationSelector } from './Location/LocationSelector';
import { LocationWrapper } from './Location/LocationWrapper';
import { Products } from './StoreFront/Products';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LocationProvider>
        <DashboardLayout>
          <Routes>
            {/* Home/Announcements per location */}
            {/* <Route path="/:locationSlug" element={<Announcements />} /> */}
            {/* <Route path="/:locationSlug/*" element={<DashboardLayout />}> */}
            <Route path="*" element={<LocationWrapper />} />
            {/* </Route> */}

            {/* Storefront routes for each store */}
            <Route path="/:locationSlug/storefront/:storeSlug" element={<StorefrontWrapper />}>
              {/* Nested routes under the same store */}
              <Route path="about" element={<AboutUs />} />
              <Route path="events" element={<Events />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>

          {/* Sticky Location Selector */}
          <div
            style={{
              position: 'sticky',
              bottom: 0,
              width: '100%',
              background: '#fafafa',
              padding: '8px 16px',
              borderTop: '1px solid #e8e8e8',
              zIndex: 10,
            }}
          >
            <LocationSelector />
            © Early Brew Cache
          </div>
        </DashboardLayout>
      </LocationProvider>
    </BrowserRouter >
  );
};

export default App;
