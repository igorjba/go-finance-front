import { useEffect, useState } from 'react';
import { getItem, setItem } from '../utils/localStorage';

export type Theme = 'light' | 'dark';

export function useDarkMode(): [Theme, () => void] {
    const storedTheme = getItem('theme');
    const initialTheme: Theme = storedTheme === 'dark' ? 'dark' : 'light';

    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    };

    useEffect(() => {
        const localTheme: string | null = getItem('theme');
        if (localTheme) {
            setTheme(localTheme as Theme);
            document.documentElement.setAttribute('data-theme', localTheme);
        }
    }, []);

    return [theme, toggleTheme];
}
