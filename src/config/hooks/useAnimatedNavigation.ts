import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

export const useAnimatedNavigation = () => {
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

    const navigateWithAnimation = useCallback((path: string) => {

        if (isNavigating || window.location.pathname === path) return;

        setIsNavigating(true);

        document.body.classList.add('page-exit');
        setTimeout(() => {
            navigate(path);
            setIsNavigating(false);
            document.body.classList.remove('page-exit');
        });
    }, [navigate, isNavigating]);

    return { navigateWithAnimation, isNavigating };
};