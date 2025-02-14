import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardComponent from '@/components/Dashboard';

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  const fetchCurrentUser = async () => {
    const personalInfo = localStorage.getItem('infos');
    const parsedInfos = personalInfo ? JSON.parse(personalInfo) : null;
    if (!parsedInfos) {
      router.push('/');
      return;
    }
    const response = await fetch('https://johandler.fly.dev/api/auth/current', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${parsedInfos.token}`,
      },
    });
    const data = await response.json();
    if (data.error) {
      localStorage.removeItem('infos');
      router.push('/');
    }
    setUserData(data);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return userData ? <DashboardComponent /> : <div>Loading</div>;
}
