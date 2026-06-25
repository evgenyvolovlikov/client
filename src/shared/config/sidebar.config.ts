import type {NavigationSection} from '@shared/model';

export const ARTICLES_NAVIGATON_ELEMENTS: NavigationSection[] = [
	{
		title: 'Angular Core & Reactivity',
		items: [
			{
				label: 'Компоненты и Директивы',
				route: ['/articles', 'angular', 'components'],
				children: [
					{
						label: 'Жизненный цикл (Lifecycle Hooks)',
						route: ['/articles', 'angular', 'lifecycle'],
						tag: 'theory',
					},
					{
						label: 'Новый Control Flow (@if, @for, @switch)',
						route: ['/articles', 'angular', 'control-flow'],
						tag: 'example',
					},
					{
						label: 'Кастомные директивы (Structural & Attribute)',
						route: ['/articles', 'angular', 'custom-directives'],
						tag: 'component',
					},
				],
			},
			{
				label: 'Сигналы (Signals) & Под капотом',
				route: ['/articles', 'angular', 'signals-overview'],
				children: [
					{
						label: 'Writable, Computed & Equality Functions',
						route: ['/articles', 'angular', 'signals-basic'],
						tag: 'theory',
					},
					{
						label: 'Сайд-эффекты через effect() и untracked()',
						route: ['/articles', 'angular', 'signals-effects'],
						tag: 'example',
					},
					{
						label: 'RxJS Interop (toSignal, toObservable)',
						route: ['/articles', 'angular', 'rxjs-interop'],
						tag: 'theory',
					},
					{
						label: 'Глубокий RxJS: High-Order Mapping Operators',
						route: ['/articles', 'angular', 'rxjs-operators'],
						tag: 'theory',
					},
					{
						label: 'Утечки памяти и Subscription Management',
						route: ['/articles', 'angular', 'memory-management'],
						tag: 'example',
					},
				],
			},
			{
				label: 'Dependency Injection Core',
				route: ['/articles', 'angular', 'di'],
				children: [
					{
						label: 'Функция inject() против Constructor',
						route: ['/articles', 'angular', 'inject-function'],
						tag: 'theory',
					},
					{
						label: 'Иерархия инжекторов: Environment vs Node',
						route: ['/articles', 'angular', 'injectors-hierarchy'],
						tag: 'theory',
					},
					{
						label: 'Multi-Providers и кастомные токены',
						route: ['/articles', 'angular', 'multi-providers'],
						tag: 'component',
					},
				],
			},
		],
	},
	{
		title: 'Angular Advanced & Performance',
		items: [
			{
				label: 'Оптимизация производительности',
				route: ['/articles', 'angular', 'performance'],
				children: [
					{
						label: 'Механика Change Detection & OnPush под капотом',
						route: ['/articles', 'angular', 'change-detection'],
						tag: 'theory',
					},
					{
						label: 'Zoneless Angular (Выход из NgZone)',
						route: ['/articles', 'angular', 'zoneless'],
						tag: 'component',
					},
					{
						label: 'Профайлинг и оптимизация тяжелых циклов',
						route: ['/articles', 'angular', 'profiling'],
						tag: 'example',
					},
				],
			},
			{
				label: 'Продвинутый Роутинг и Асинхронность',
				route: ['/articles', 'angular', 'routing'],
				children: [
					{
						label: 'Функциональные Guards & Resolvers',
						route: ['/articles', 'angular', 'functional-guards'],
						tag: 'theory',
					},
					{
						label: 'Ленивая загрузка (Deferrable Views - @defer)',
						route: ['/articles', 'angular', 'defer-views'],
						tag: 'component',
					},
				],
			},
			{
				label: 'SSR, SSG & Hydration',
				route: ['/articles', 'angular', 'rendering'],
				children: [
					{
						label: 'Server-Side Rendering & Hydration Errors',
						route: ['/articles', 'angular', 'ssr-hydration'],
						tag: 'theory',
					},
					{
						label: 'Оптимизация Core Web Vitals на Angular',
						route: ['/articles', 'angular', 'web-vitals'],
						tag: 'example',
					},
				],
			},
			{
				label: 'Работа с формами',
				route: ['/articles', 'angular', 'forms'],
				children: [
					{
						label: 'ControlValueAccessor (Кастомные селекторы)',
						route: ['/articles', 'angular', 'cva'],
						tag: 'component',
					},
					{
						label: 'Динамические формы и Advanced Валидаторы',
						route: ['/articles', 'angular', 'dynamic-forms'],
						tag: 'example',
					},
				],
			},
			{
				label: 'Управление состоянием',
				route: ['/articles', 'angular', 'state'],
				children: [
					{
						label: 'NgRx Signal Store (Deep Dive)',
						route: ['/articles', 'angular', 'signal-store'],
						tag: 'component',
					},
					{
						label: 'Component Store паттерны',
						route: ['/articles', 'angular', 'component-store'],
						tag: 'example',
					},
				],
			},
		],
	},
	{
		title: 'Архитектура и Инфраструктура',
		items: [
			{
				label: 'Масштабирование Enterprise приложений',
				route: ['/articles', 'architecture', 'enterprise'],
				children: [
					{
						label: 'Feature-Sliced Design (FSD) в Angular',
						route: ['/articles', 'architecture', 'fsd'],
						tag: 'theory',
					},
					{
						label: 'Монорепозитории (Nx Architecture)',
						route: ['/articles', 'architecture', 'nx-monorepo'],
						tag: 'component',
					},
					{
						label: 'Микрофронтенды (Module Federation)',
						route: ['/articles', 'architecture', 'microfrontends'],
						tag: 'component',
					},
				],
			},
		],
	},
	{
		title: 'Алгоритмы и Структуры данных',
		items: [
			{
				label: 'Оценка сложности алгоритмов',
				route: ['/articles', 'algorithms', 'complexity'],
				children: [
					{
						label: 'Временная и пространственная сложность (Big O)',
						route: ['/articles', 'algorithms', 'big-o'],
						tag: 'theory',
					},
				],
			},
			{
				label: 'Структуры данных',
				route: ['/articles', 'algorithms', 'data-structures'],
				children: [
					{
						label: 'Связные списки (Linked Lists)',
						route: ['/articles', 'algorithms', 'linked-lists'],
						tag: 'theory',
					},
					{
						label: 'Хэш-таблицы (Hash Maps) и коллизии',
						route: ['/articles', 'algorithms', 'hash-maps'],
						tag: 'theory',
					},
					{
						label: 'Деревья и Графы (BFS & DFS обходы)',
						route: ['/articles', 'algorithms', 'trees-graphs'],
						tag: 'theory',
					},
				],
			},
			{
				label: 'Алгоритмические паттерны',
				route: ['/articles', 'algorithms', 'patterns'],
				children: [
					{
						label: 'Два указателя (Two Pointers)',
						route: ['/articles', 'algorithms', 'two-pointers'],
						tag: 'example',
					},
					{
						label: 'Скользящее окно (Sliding Window)',
						route: ['/articles', 'algorithms', 'sliding-window'],
						tag: 'example',
					},
					{
						label: 'Динамическое программирование (DP)',
						route: ['/articles', 'algorithms', 'dynamic-programming'],
						tag: 'example',
					},
				],
			},
			{
				label: 'Поиск и Сортировка',
				route: ['/articles', 'algorithms', 'sorting'],
				children: [
					{
						label: 'Бинарный поиск (Binary Search)',
						route: ['/articles', 'algorithms', 'binary-search'],
						tag: 'example',
					},
					{
						label: 'Быстрая сортировка (Quick Sort)',
						route: ['/articles', 'algorithms', 'quick-sort'],
						tag: 'example',
					},
				],
			},
		],
	},
];
