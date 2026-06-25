import {type Article, ArticleStatus} from '../model/types';

export const MOCK_ARTICLE: Article = {
	id: 'art_01J1',
	slug: 'lifecycle-hooks',
	status: ArticleStatus.PUBLISHED,
	title: 'Жизненный цикл компонента (Lifecycle Hooks)',
	leadText:
		'Внутренний алгоритм Angular последовательно вызывает методы жизненного цикла компонентов и директив, позволяя разработчику точно контролировать этапы инициализации, обновления данных и уничтожения инстансов.',
	categoryId: 'angular-core',
	tags: ['theory', 'component'],
	seo: {
		description:
			'Подробный разбор хуков жизненного цикла Angular с примерами оптимизации производительности.',
		keywords: ['angular', 'lifecycle hooks', 'ngOnInit', 'change detection'],
	},
	authorId: 'usr_admin',
	createdAt: '2026-06-23T12:00:00Z',
	updatedAt: '2026-06-23T15:30:00Z',
	toc: [
		{id: '1', label: 'Порядок выполнения', anchor: 'execution-order'},
		{id: '2', label: 'Оптимизация OnChanges', anchor: 'optimization'},
		{id: '3', label: 'Практический пример', anchor: 'example'},
	],
	blocks: [
		{
			type: 'note',
			data: {
				text: 'Никогда не выполняйте тяжелые вычислительные алгоритмы или HTTP-запросы внутри конструктора. Для этого существует хук ngOnInit.',
				noteType: 'info',
			},
		},
		{
			type: 'text',
			data: {
				content:
					'<p>Angular сканирует изменения сверху вниз по дереву компонентов. В момент выполнения хуков инициализации, дочерние компоненты еще могут быть не обработаны, что важно учитывать при работе с DOM-структурой напрямую.</p>',
				format: 'html',
			},
		},
		{
			type: 'image',
			data: {
				url: 'https://placehold.co/800x400/1e1e1e/ececec?text=Angular+Lifecycle+Diagram',
				alt: 'Схема жизненного цикла Angular',
				caption:
					'Иллюстрация: Порядок вызова хуков жизненного цикла от инициализации до уничтожения',
				width: '100%',
			},
		},
		{
			type: 'complexity',
			data: {
				time: 'O(N)',
				space: 'O(1)',
				description:
					'Сложность проверки изменений (Change Detection) линейно зависит от количества активных привязок (bindings) в дереве компонентов.',
			},
		},
		{
			type: 'code',
			data: {
				language: 'typescript',
				code: `@Component({
  selector: 'app-list-processor',
  template: \`<div *ngFor="let item of data()">{{ item }}</div>\`
})
export class ListProcessorComponent implements OnChanges {
  public data = input.required<string[]>();

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      // Алгоритм обработки изменений
      console.log('Данные обновились:', changes['data'].currentValue);
    }
  }
}`,
			},
		},
		{
			type: 'features',
			data: {
				sectionTitle: 'Золотые правила работы с хуками',
				items: [
					{
						title: 'ngOnDestroy',
						text: 'Обязательно отписывайтесь от RxJS стримов, если не используете пайпы или takeUntilDestroyed.',
					},
					{
						title: 'ngAfterViewInit',
						text: 'Безопасная точка для инициализации сторонних JS-библиотек, работающих с DOM.',
					},
				],
			},
		},
	],
};
