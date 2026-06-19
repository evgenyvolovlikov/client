import {ChangeDetectionStrategy, Component, OnInit, computed, input} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-p-glossary-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'glossary-form-page.component.html',
    styleUrl: 'glossary-form-page.component.scss',
    imports: [RouterLink, ReactiveFormsModule],
})
export class GlossaryFormPageComponent implements OnInit {
    public id = input<string>();
    protected isEditMode = computed(() => !!this.id());

    protected form = new FormGroup({
        category: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        leadText: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        noteText: new FormControl('', {nonNullable: true}),
        sectionTitle: new FormControl('', {nonNullable: true, validators: Validators.required}),

        features: new FormArray<FormGroup<{title: FormControl<string>; text: FormControl<string>}>>(
            [],
        ),

        toc: new FormArray<
            FormGroup<{
                id: FormControl<string>;
                label: FormControl<string>;
                anchor: FormControl<string>;
            }>
        >([]),
    });

    protected get featuresFormArray() {
        return this.form.controls.features;
    }

    protected get tocFormArray() {
        return this.form.controls.toc;
    }

    public ngOnInit(): void {
        this.addFeature();
        this.addTocElement();

        if (this.isEditMode()) {
            this.form.patchValue({
                category: 'Психология эмоций',
                title: 'Понятие эмоций: функции, виды и природа',
                leadText: 'Эмоции — это кратковременные субъективные реакции человека...',
                sectionTitle: 'Основные функции эмоций',
            });
        }
    }

    protected addFeature(): void {
        this.featuresFormArray.push(
            new FormGroup({
                title: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
                text: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
            }),
        );
    }

    protected addTocElement(): void {
        this.tocFormArray.push(
            new FormGroup({
                id: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
                label: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
                anchor: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
            }),
        );
    }

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.info('Сформированный Payload по модели Article:', this.form.getRawValue());
    }
}
