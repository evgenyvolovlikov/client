import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
	selector: 'app-p-articles',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'articles-page.component.html',
	styleUrl: 'articles-page.component.scss',
})
export class ArticlesPageComponent {
	public id = input.required<string>();

	protected onDelete(): void {
		if (confirm('Вы уверены, что хотите удалить эту статью?')) {
			console.warn(`Удаляем статью: ${this.id()}`);
		}
	}
}
