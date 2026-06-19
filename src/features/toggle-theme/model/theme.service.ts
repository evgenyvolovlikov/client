import {Injectable, computed, effect, signal} from '@angular/core';

import {DEFAULT_THEME, THEME_STORAGE_KEY} from '@shared/config';

export type ThemeMode = 'light' | 'dark';

@Injectable({providedIn: 'root'})
export class ThemeService {
    private readonly currentTheme = signal<ThemeMode>(
        (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || DEFAULT_THEME,
    );

    public readonly isLightTheme = computed(() => this.currentTheme() === 'light');

    constructor() {
        effect(() => {
            const theme = this.currentTheme();
            localStorage.setItem(THEME_STORAGE_KEY, theme);

            if (theme === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        });
    }

    public toggleTheme(): void {
        this.currentTheme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
    }
}
