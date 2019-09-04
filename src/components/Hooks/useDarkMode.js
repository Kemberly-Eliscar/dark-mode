import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    document.body.classList
    return [darkMode, setDarkMode];
};

export default useDarkMode;