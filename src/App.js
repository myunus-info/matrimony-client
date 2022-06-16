import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Gallery from './components/Gallery/Gallery';
import Register from './components/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Settings from './pages/Settings/Settings';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import Review from './pages/Review/Review';
import Billing from './pages/Billing/Billing';
import { useState } from 'react';
import Paperbase from './components/DashboardMain/Paperbase';

function App() {
  const [selectedGender, setSelectedGender] = useState();
  const selectGender = gender => setSelectedGender(gender);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Homepage selectGender={selectGender} />} />
        <Route path="/register" element={<Register gender={selectedGender} />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/dashboard" element={<Paperbase />}>
          <Route path="settings" element={<Settings />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="review" element={<Review />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
