import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-p-glossary-detail',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-detail-page.component.html',
    styleUrl: 'glossary-detail-page.component.scss',
    imports: [RouterLink],
})
export class GlossaryDetailPageComponent {
    public id = input.required<string>();

    protected onDelete(): void {
        const isConfirmed = confirm('Вы уверены, что хотите удалить эту статью?');
        if (isConfirmed) {
            console.warn(`Удаляем статью со слагом: ${this.id()}`);
        }
    }
}
