import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dados: any[] = [];
  @Input() colunas: string[] = [];
  @Input() templates: Record<string, TemplateRef<any>> = {};
  @Input() actions: TemplateRef<any> | null = null
}
