import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pessoas = [
    { id: 1, nome: 'Ana', idade: 25, status: 'ativo' },
    { id: 2, nome: 'João', idade: 30, status: 'inativo' },
    { id: 3, nome: 'Carlos', idade: 15, status: 'ativo' },
    { id: 4, nome: 'Larissa', idade: 20, status: 'inativo' },
  ];

  switchActive(id : number) {

    console.log(id)
    let copy = this.pessoas
    let person = copy.findIndex((e) => e.id == id) 

    if (person != null) {
      copy[person].status = copy[person].status === "ativo" ? "inativo" : "ativo"
    }

    this.pessoas = copy
  }

}
