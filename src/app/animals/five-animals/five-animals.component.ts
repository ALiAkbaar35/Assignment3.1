import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-five-animals',
  templateUrl: './five-animals.component.html',
  styleUrls: ['./five-animals.component.css'],
})
export class FiveAnimalsComponent {
  @Input() animals: any[] = [];
}
