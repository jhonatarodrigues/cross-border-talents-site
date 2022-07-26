import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin/login');
  }, [navigate]);
  return <div />;
}
