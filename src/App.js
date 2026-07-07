import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

// Dashboards
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import LawyerDashboard from "./pages/dashboards/LawyerDashboard";
import ClientDashboard from "./pages/dashboards/ClientDashboard";

// Case Management
import CreateCase from "./pages/cases/CreateCase";
import EditCase from "./pages/cases/EditCase";
import ViewCase from "./pages/cases/ViewCase";
import SearchCase from "./pages/cases/SearchCase";
import AssignLawyer from "./pages/cases/AssignLawyer";

// Client & Documents
import ClientPortal from "./pages/client/ClientPortal";
import DocumentUpload from "./pages/documents/DocumentUpload";

// Other Pages
import HearingSchedule from "./pages/hearings/HearingSchedule";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "25px",
            marginLeft: "240px",
            marginTop: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Layout>
              <AdminDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/lawyer"
        element={
          <ProtectedRoute>
            <Layout>
              <LawyerDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/client-dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <ClientDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-case"
        element={
          <ProtectedRoute>
            <Layout>
              <CreateCase />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-case"
        element={
          <ProtectedRoute>
            <Layout>
              <EditCase />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/view-case"
        element={
          <ProtectedRoute>
            <Layout>
              <ViewCase />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/search-case"
        element={
          <ProtectedRoute>
            <Layout>
              <SearchCase />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/assign-lawyer"
        element={
          <ProtectedRoute>
            <Layout>
              <AssignLawyer />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/client"
        element={
          <ProtectedRoute>
            <Layout>
              <ClientPortal />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Layout>
              <DocumentUpload />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/hearings"
        element={
          <ProtectedRoute>
            <Layout>
              <HearingSchedule />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Layout>
              <Notifications />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;