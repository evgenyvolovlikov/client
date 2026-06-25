import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

import {Article, MOCK_ARTICLE} from '@entities/article';

@Component({
	selector: 'app-p-article-detail',
	standalone: true,
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'article-detail-page.component.html',
	styleUrl: 'article-detail-page.component.scss',
})
export class ArticleDetailPageComponent {
	public id = input.required<string>();

	protected readonly articleData: Article = MOCK_ARTICLE;

	protected onDelete(): void {
		const isConfirmed = confirm('Вы уверены, что хотите удалить эту статью?');
		if (isConfirmed) {
			console.warn(`Удаляем статью со слагом: ${this.id()}`);
		}
	}
}
