import {ChangeDetectionStrategy, Component, DestroyRef, inject, signal} from '@angular/core';
import {
	FormControl,
	FormGroup,
	NonNullableFormBuilder,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

interface LoginForm {
	email: FormControl<string>;
	password: FormControl<string>;
}

@Component({
	selector: 'app-f-auth-by-email',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'auth-by-email.component.html',
	styleUrl: 'auth-by-email.component.scss',
	imports: [ReactiveFormsModule, RouterLink],
})
export class AuthByEmailComponent {
	private readonly fb = inject(NonNullableFormBuilder);
	private readonly router = inject(Router);
	private readonly destroyRef = inject(DestroyRef);

	protected readonly isLoading = signal<boolean>(false);
	public readonly errorMessage = signal<string | null>(null);
	public readonly showPassword = signal<boolean>(false);

	protected readonly form: FormGroup<LoginForm> = this.fb.group<LoginForm>({
		email: this.fb.control('', [Validators.required, Validators.email]),
		password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
	});

	protected togglePasswordVisibility(): void {
		this.showPassword.update((value) => !value);
	}

	protected onSubmit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.isLoading.set(true);
		this.errorMessage.set(null);

		const credentials = this.form.getRawValue();

		// Тестовая имитация
		const timeoutId = setTimeout(() => {
			this.isLoading.set(false);

			if (credentials.email === 'admin@mail.ru' && credentials.password === '123456') {
				this.router.navigate(['/articles']);
			} else {
				this.errorMessage.set('Неверный адрес почты или пароль');
			}
		}, 1200);

		this.destroyRef.onDestroy(() => clearTimeout(timeoutId));
	}
}
