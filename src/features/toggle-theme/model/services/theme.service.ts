import {isPlatformBrowser} from '@angular/common';
import {Injectable, PLATFORM_ID, computed, effect, inject, signal} from '@angular/core';

import {DEFAULT_THEME, THEME_STORAGE_KEY} from '@shared/config';
import {ThemeMode} from '@shared/model';

@Injectable({providedIn: 'root'})
export class ThemeService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly isBrowser = isPlatformBrowser(this.platformId);

	private readonly currentTheme = signal<ThemeMode>(
		this.isBrowser
			? (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || DEFAULT_THEME
			: DEFAULT_THEME,
	);

	public readonly isLightTheme = computed(() => this.currentTheme() === 'light');

	private constructor() {
		effect(() => {
			const theme = this.currentTheme();
			if (!this.isBrowser) return;

			localStorage.setItem(THEME_STORAGE_KEY, theme);

			const rootElement = document.documentElement;
			if (theme === 'light') {
				rootElement.classList.add('light-theme');
			} else {
				rootElement.classList.remove('light-theme');
			}
		});
	}

	public toggleTheme(): void {
		this.currentTheme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
	}
}
