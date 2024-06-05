import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state || {};

    if (!formData) {
        navigate('/');
        return null;
    }

    return (
        <div>
            <h1>Form Submission Successful</h1>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
};

export default Success;
