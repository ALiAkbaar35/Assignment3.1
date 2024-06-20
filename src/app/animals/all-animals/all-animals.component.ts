import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css'],
  // standalone: true,
})
export class AllAnimalsComponent {
  animals = [
    {
      name: 'Meowsy',
      species: 'cat',
      foods: {
        likes: ['tuna', 'catnip'],
        dislikes: ['ham', 'zucchini'],
      },
    },
    {
      name: 'Barky',
      species: 'dog',
      foods: {
        likes: ['bones', 'carrots'],
        dislikes: ['tuna'],
      },
    },
    {
      name: 'Purrpaws',
      species: 'cat',
      foods: {
        likes: ['mice'],
        dislikes: ['cookies'],
      },
    },
    {
      name: 'Whiskers',
      species: 'rabbit',
      foods: {
        likes: ['lettuce', 'carrots'],
        dislikes: ['meat', 'cheese'],
      },
    },
    {
      name: 'Flappy',
      species: 'bird',
      foods: {
        likes: ['seeds', 'berries'],
        dislikes: ['bread'],
      },
    },
    {
      name: 'Slithery',
      species: 'snake',
      foods: {
        likes: ['mice', 'eggs'],
        dislikes: ['fruits'],
      },
    },
    {
      name: 'Swimmy',
      species: 'fish',
      foods: {
        likes: ['algae', 'small insects'],
        dislikes: ['bread', 'cheese'],
      },
    },
    {
      name: 'Hoppy',
      species: 'frog',
      foods: {
        likes: ['insects', 'worms'],
        dislikes: ['leaves'],
      },
    },
    {
      name: 'Cuddles',
      species: 'hamster',
      foods: {
        likes: ['seeds', 'fruits'],
        dislikes: ['meat'],
      },
    },
    {
      name: 'Scaley',
      species: 'lizard',
      foods: {
        likes: ['insects', 'fruits'],
        dislikes: ['vegetables'],
      },
    },
  ];

  fiveAnimals = this.animals.slice(0, 5);
}
