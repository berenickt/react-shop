import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

// **** Outlet 컴포넌트 : Route 의 children 으로 들어가는 JSX 엘리먼트를 보여주는 역할
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
