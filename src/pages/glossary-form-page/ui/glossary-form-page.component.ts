import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-p-glossary-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-form-page.component.html',
    styleUrl: 'glossary-form-page.component.scss',
    imports: [RouterLink],
})
export class GlossaryFormPageComponent {
    public id = input<string>();
    protected isEditMode = computed(() => !!this.id());
    protected pageTitle = computed(() => {
        return this.isEditMode() ? `Редактирование статьи: ${this.id()}` : 'Создание новой статьи';
    });

    protected onSubmit(event: Event): void {
        event.preventDefault();
        if (this.isEditMode()) {
            console.warn(`Сохраняем изменения для старой статьи: ${this.id()}`);
        } else {
            console.warn('Создаем абсолютно новую статью');
        }
    }
}
