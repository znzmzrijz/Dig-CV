import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import WordwareDemo from './pages/WordwareDemo';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="container mx-auto px-4 py-8 flex-grow mt-32 md:mt-40">
                    <Routes>
                      <Route path="/" element={<Overview />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/experience" element={<Experience />} />
                      <Route path="/wordware" element={<WordwareDemo />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;