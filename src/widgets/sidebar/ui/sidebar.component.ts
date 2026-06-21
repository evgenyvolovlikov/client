import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

import {getRoute} from '@shared/config';
import {NavigationLink} from '@shared/model';
import {NavigationComponent} from '@shared/ui';

@Component({
    selector: 'app-w-sidebar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    imports: [NavigationComponent],
})
export class SidebarComponent {
    protected menuElements = signal<NavigationLink[]>([
        {
            label: 'Тип личности',
            route: getRoute.glossaryDetail('personality-type', 'overview'),
            children: [
                {
                    label: 'Направленность личности',
                    route: getRoute.glossaryDetail('personality-type', 'orientation'),
                    children: [
                        {
                            label: 'Экстраверт',
                            route: getRoute.glossaryDetail('personality-type', 'extravert'),
                        },
                        {
                            label: 'Интроверт',
                            route: getRoute.glossaryDetail('personality-type', 'introvert'),
                        },
                    ],
                },
                {
                    label: 'Темперамент',
                    route: getRoute.glossaryDetail('personality-type', 'temperament'),
                    children: [
                        {
                            label: 'Сангвиник',
                            route: getRoute.glossaryDetail('personality-type', 'sanguine'),
                        },
                        {
                            label: 'Флегматик',
                            route: getRoute.glossaryDetail('personality-type', 'phlegmatic'),
                        },
                        {
                            label: 'Холерик',
                            route: getRoute.glossaryDetail('personality-type', 'choleric'),
                        },
                        {
                            label: 'Меланхолик',
                            route: getRoute.glossaryDetail('personality-type', 'melancholic'),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Мышление',
            route: getRoute.glossaryDetail('thinking', 'overview'),
            children: [
                {
                    label: 'Убеждения и установки',
                    route: getRoute.glossaryDetail('thinking', 'beliefs'),
                    children: [
                        {
                            label: 'Глубинные убеждения',
                            route: getRoute.glossaryDetail('thinking', 'core-beliefs'),
                        },
                        {
                            label: 'Промежуточные правила',
                            route: getRoute.glossaryDetail('thinking', 'intermediate-rules'),
                        },
                        {
                            label: 'Автоматические мысли',
                            route: getRoute.glossaryDetail('thinking', 'automatic-thoughts'),
                        },
                    ],
                },
                {
                    label: 'Ловушки мышления',
                    route: getRoute.glossaryDetail('thinking', 'traps'),
                    children: [
                        {
                            label: 'Когнитивные искажения',
                            route: getRoute.glossaryDetail('thinking', 'cognitive-distortions'),
                        },
                        {
                            label: 'Стереотипы восприятия',
                            route: getRoute.glossaryDetail('thinking', 'stereotypes'),
                        },
                    ],
                },
                {
                    label: 'Локус контроля',
                    route: getRoute.glossaryDetail('thinking', 'locus-of-control'),
                    children: [
                        {
                            label: 'Внутренний (Интернальный)',
                            route: getRoute.glossaryDetail('thinking', 'internal-locus'),
                        },
                        {
                            label: 'Внешний (Экстернальный)',
                            route: getRoute.glossaryDetail('thinking', 'external-locus'),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Самооценка и Образ Я',
            route: getRoute.glossaryDetail('self-esteem', 'overview'),
            children: [
                {
                    label: 'Компоненты самоотношения',
                    route: getRoute.glossaryDetail('self-esteem', 'components'),
                    children: [
                        {
                            label: 'Самоценность (Базовая)',
                            route: getRoute.glossaryDetail('self-esteem', 'self-worth'),
                        },
                        {
                            label: 'Самооценка (Ситуативная)',
                            route: getRoute.glossaryDetail('self-esteem', 'situational-esteem'),
                        },
                        {
                            label: 'Уверенность в себе',
                            route: getRoute.glossaryDetail('self-esteem', 'self-confidence'),
                        },
                    ],
                },
                {
                    label: 'Внутренние голоса',
                    route: getRoute.glossaryDetail('self-esteem', 'inner-voices'),
                    children: [
                        {
                            label: 'Внутренний критик',
                            route: getRoute.glossaryDetail('self-esteem', 'inner-critic'),
                        },
                        {
                            label: 'Внутренний защитник',
                            route: getRoute.glossaryDetail('self-esteem', 'inner-defender'),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Потребности',
            route: getRoute.glossaryDetail('needs', 'overview'),
            children: [
                {
                    label: 'Витальные потребности',
                    route: getRoute.glossaryDetail('needs', 'vital-needs'),
                    children: [
                        {
                            label: 'Пищевое и питьевое поведение',
                            route: getRoute.glossaryDetail('needs', 'eating-behavior'),
                        },
                        {
                            label: 'Обеспечение безопасности',
                            route: getRoute.glossaryDetail('needs', 'safety-needs'),
                        },
                        {
                            label: 'Сон и отдых',
                            route: getRoute.glossaryDetail('needs', 'sleep-and-rest'),
                        },
                        {
                            label: 'Гомеостаз и терморегуляция',
                            route: getRoute.glossaryDetail('needs', 'homeostasis'),
                        },
                        {label: 'Груминг', route: getRoute.glossaryDetail('needs', 'grooming')},
                    ],
                },
                {
                    label: 'Зоосоциальные потребности',
                    route: getRoute.glossaryDetail('needs', 'zoosocial-needs'),
                    children: [
                        {
                            label: 'Половое поведение',
                            route: getRoute.glossaryDetail('needs', 'sexual-behavior'),
                        },
                        {
                            label: 'Родительское поведение',
                            route: getRoute.glossaryDetail('needs', 'parental-behavior'),
                        },
                        {
                            label: 'Территориальное поведение',
                            route: getRoute.glossaryDetail('needs', 'territorial-behavior'),
                        },
                        {
                            label: 'Иерархическое поведение',
                            route: getRoute.glossaryDetail('needs', 'hierarchical-behavior'),
                        },
                        {
                            label: 'Эмпатия и привязанность',
                            route: getRoute.glossaryDetail('needs', 'empathy-attachment'),
                        },
                    ],
                },
                {
                    label: 'Потребность саморазвития',
                    route: getRoute.glossaryDetail('needs', 'self-development-needs'),
                    children: [
                        {
                            label: 'Исследовательское поведение',
                            route: getRoute.glossaryDetail('needs', 'exploratory-behavior'),
                        },
                        {
                            label: 'Подражательское поведение',
                            route: getRoute.glossaryDetail('needs', 'imitative-behavior'),
                        },
                        {
                            label: 'Игровое поведение',
                            route: getRoute.glossaryDetail('needs', 'play-behavior'),
                        },
                        {
                            label: 'Рефлекс свободы',
                            route: getRoute.glossaryDetail('needs', 'freedom-reflex'),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Ценности',
            route: getRoute.glossaryDetail('values', 'overview'),
            children: [
                {
                    label: 'Сохранение',
                    route: getRoute.glossaryDetail('values', 'conservation'),
                    children: [
                        {
                            label: 'Безопасность',
                            route: getRoute.glossaryDetail('values', 'security'),
                        },
                        {label: 'Традиции', route: getRoute.glossaryDetail('values', 'traditions')},
                        {
                            label: 'Конформизм',
                            route: getRoute.glossaryDetail('values', 'conformity'),
                        },
                    ],
                },
                {
                    label: 'Изменение',
                    route: getRoute.glossaryDetail('values', 'openness-to-change'),
                    children: [
                        {
                            label: 'Самостоятельность',
                            route: getRoute.glossaryDetail('values', 'self-direction'),
                        },
                        {
                            label: 'Стимуляция',
                            route: getRoute.glossaryDetail('values', 'stimulation'),
                        },
                        {label: 'Гедонизм', route: getRoute.glossaryDetail('values', 'hedonism')},
                    ],
                },
                {
                    label: 'Самоутверждение',
                    route: getRoute.glossaryDetail('values', 'self-enhancement'),
                    children: [
                        {
                            label: 'Достижения',
                            route: getRoute.glossaryDetail('values', 'achievement'),
                        },
                        {label: 'Власть', route: getRoute.glossaryDetail('values', 'power')},
                    ],
                },
                {
                    label: 'Выход за пределы Я',
                    route: getRoute.glossaryDetail('values', 'self-transcendence'),
                    children: [
                        {
                            label: 'Благожелательность',
                            route: getRoute.glossaryDetail('values', 'benevolence'),
                        },
                        {
                            label: 'Универсализм',
                            route: getRoute.glossaryDetail('values', 'universalism'),
                        },
                    ],
                },
            ],
        },
        {
            label: 'Эмоции',
            route: getRoute.glossaryDetail('emotions', 'overview'),
            children: [
                {label: 'Радость', route: getRoute.glossaryDetail('emotions', 'joy')},
                {label: 'Грусть', route: getRoute.glossaryDetail('emotions', 'sadness')},
                {label: 'Страх', route: getRoute.glossaryDetail('emotions', 'fear')},
                {label: 'Гнев', route: getRoute.glossaryDetail('emotions', 'anger')},
                {label: 'Удивление', route: getRoute.glossaryDetail('emotions', 'surprise')},
                {label: 'Ожидание', route: getRoute.glossaryDetail('emotions', 'anticipation')},
                {label: 'Доверие', route: getRoute.glossaryDetail('emotions', 'trust')},
                {label: 'Отвращение', route: getRoute.glossaryDetail('emotions', 'disgust')},
            ],
        },
        {
            label: 'Личные границы',
            route: getRoute.glossaryDetail('boundaries', 'overview'),
            children: [
                {
                    label: 'Физические границы',
                    route: getRoute.glossaryDetail('boundaries', 'physical'),
                },
                {
                    label: 'Психологические границы',
                    route: getRoute.glossaryDetail('boundaries', 'psychological'),
                },
                {
                    label: 'Интеллектуальные границы',
                    route: getRoute.glossaryDetail('boundaries', 'intellectual'),
                },
                {
                    label: 'Материальные границы',
                    route: getRoute.glossaryDetail('boundaries', 'material'),
                },
                {label: 'Временные границы', route: getRoute.glossaryDetail('boundaries', 'time')},
                {
                    label: 'Сексуальные границы',
                    route: getRoute.glossaryDetail('boundaries', 'sexual'),
                },
            ],
        },
        {
            label: 'Деятельность и Поведение',
            route: getRoute.glossaryDetail('behavior', 'overview'),
            children: [
                {
                    label: 'Стресс-менеджмент',
                    route: getRoute.glossaryDetail('behavior', 'stress-management'),
                    children: [
                        {
                            label: 'Копинг-стратегии',
                            route: getRoute.glossaryDetail('behavior', 'coping-strategies'),
                        },
                        {
                            label: 'Психологические защиты',
                            route: getRoute.glossaryDetail('behavior', 'defense-mechanisms'),
                        },
                    ],
                },
                {
                    label: 'Ресурсы и Энергия',
                    route: getRoute.glossaryDetail('behavior', 'resources'),
                    children: [
                        {
                            label: 'Источники ресурса',
                            route: getRoute.glossaryDetail('behavior', 'resource-sources'),
                        },
                        {
                            label: 'Автоматические привычки',
                            route: getRoute.glossaryDetail('behavior', 'habits'),
                        },
                    ],
                },
            ],
        },
    ]);
}
