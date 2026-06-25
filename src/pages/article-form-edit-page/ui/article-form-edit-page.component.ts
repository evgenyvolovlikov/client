import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	computed,
	inject,
	input,
} from '@angular/core';
import {
	FormArray,
	FormControl,
	FormGroup,
	NonNullableFormBuilder,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {RouterLink} from '@angular/router';

import {MOCK_ARTICLE} from '@entities/article/lib/mock.data';
import {Article} from '@entities/article/model/types';

interface TocForm {
	id: FormControl<string>;
	label: FormControl<string>;
	anchor: FormControl<string>;
}

interface FeatureForm {
	title: FormControl<string>;
	text: FormControl<string>;
}

interface ArticleForm {
	title: FormControl<string>;
	slug: FormControl<string>;
	category: FormControl<string>;
	leadText: FormControl<string>;
	noteText: FormControl<string>;
	sectionTitle: FormControl<string>;
	features: FormArray<FormGroup<FeatureForm>>;
	toc: FormArray<FormGroup<TocForm>>;
}

@Component({
	selector: 'app-p-glossary-form',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'article-form-edit-page.component.html',
	styleUrl: 'article-form-edit-page.component.scss',
	imports: [ReactiveFormsModule, RouterLink],
})
export class ArticleFormEditPageComponent implements OnInit {
	public id = input<string>();
	protected isEditMode = computed(() => !!this.id());

	/* DI */
	private readonly fb = inject(NonNullableFormBuilder);

	/* Инициализация строго типизированной формы */
	protected form = this.fb.group<ArticleForm>({
		title: this.fb.control('', [Validators.required]),
		slug: this.fb.control('', [Validators.required]),
		category: this.fb.control('', [Validators.required]),
		leadText: this.fb.control('', [Validators.required]),
		noteText: this.fb.control(''),
		sectionTitle: this.fb.control('', [Validators.required]),
		features: this.fb.array<FormGroup<FeatureForm>>([]),
		toc: this.fb.array<FormGroup<TocForm>>([]),
	});

	// Геттеры с правильными типами
	protected get featuresFormArray(): FormArray<FormGroup<FeatureForm>> {
		return this.form.controls.features;
	}

	protected get tocFormArray(): FormArray<FormGroup<TocForm>> {
		return this.form.controls.toc;
	}

	public ngOnInit(): void {
		if (this.isEditMode()) {
			this.loadData(MOCK_ARTICLE);
		} else {
			this.addFeature();
			this.addTocElement();
		}
	}

	// Фабрики создания FormGroup
	protected addFeature(initialData?: {title: string; text: string}): void {
		const featureGroup = this.fb.group<FeatureForm>({
			title: this.fb.control(initialData?.title ?? '', [Validators.required]),
			text: this.fb.control(initialData?.text ?? '', [Validators.required]),
		});
		this.featuresFormArray.push(featureGroup);
	}

	protected addTocElement(initialData?: {id: string; label: string; anchor: string}): void {
		const tocGroup = this.fb.group<TocForm>({
			id: this.fb.control(initialData?.id ?? '', [Validators.required]),
			label: this.fb.control(initialData?.label ?? '', [Validators.required]),
			anchor: this.fb.control(initialData?.anchor ?? '', [Validators.required]),
		});
		this.tocFormArray.push(tocGroup);
	}

	protected removeFeature(index: number): void {
		this.featuresFormArray.removeAt(index);
	}

	protected removeTocElement(index: number): void {
		this.tocFormArray.removeAt(index);
	}

	private loadData(article: Article): void {
		const noteBlock = article.blocks.find((b) => b.type === 'note');
		const featuresBlock = article.blocks.find((b) => b.type === 'features');

		this.form.patchValue({
			title: article.title,
			category: article.categoryId,
			leadText: article.leadText,
			slug: article.slug,
			noteText: noteBlock?.type === 'note' ? noteBlock.data.text : '',
			sectionTitle:
				featuresBlock?.type === 'features' ? featuresBlock.data.sectionTitle : '',
		});

		this.tocFormArray.clear();
		this.featuresFormArray.clear();

		article.toc.forEach((item) => this.addTocElement(item));

		if (featuresBlock?.type === 'features') {
			featuresBlock.data.items.forEach((item) => this.addFeature(item));
		}
	}

	protected onSubmit(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const rawData = this.form.getRawValue();
		const payload = this.buildPayload(rawData);

		console.info('Сформированный Payload:', payload);
		/* TODO: Доработать сервис(this.articleService.update(this.id(), payload)); */
	}

	private buildPayload(formData: ReturnType<typeof this.form.getRawValue>): Partial<Article> {
		return {
			title: formData.title,
			slug: formData.slug,
			categoryId: formData.category,
			leadText: formData.leadText,
			toc: formData.toc,
			blocks: [
				{
					type: 'note',
					data: {text: formData.noteText, noteType: 'info'},
				},
				{
					type: 'features',
					data: {
						sectionTitle: formData.sectionTitle,
						items: formData.features,
					},
				},
			],
		};
	}
}
