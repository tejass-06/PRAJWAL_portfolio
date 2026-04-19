'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../../lib/context/AuthContext';
import AdminDashboard from '../../../lib/components/AdminDashboard';

export default function DashboardPage() {
  const { token } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
    }
  }, [token, router]);

  if (!token) {
    return <div className="flex items-center justify-center min-h-screen">Redirecting...</div>;
  }

  return <AdminDashboard />;
}
