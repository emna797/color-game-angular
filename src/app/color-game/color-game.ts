import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-color-game',
  standalone: true,

  imports: [CommonModule, FormsModule, Navbar],

  templateUrl: './color-game.html',
  styleUrl: './color-game.css',
})
export class ColorGame {
  rows: number = 3;
  cols: number = 4;
  grid: string[][] = [];

  // Popup

  showPopup: boolean = false;

  selectedRow: number = -1;
  selectedCol: number = -1;

  selectedColor: string = 'yellow';

  constructor() {
    this.createGrid();
  }

  createGrid() {
    this.grid = [];

    for (let i = 0; i < this.rows; i++) {
      let line: string[] = [];

      for (let j = 0; j < this.cols; j++) {
        line.push('');
      }

      this.grid.push(line);
    }
  }

  changeRows() {
    if (this.rows < 1) {
      this.rows = 1;
    }

    if (this.rows > 20) {
      this.rows = 20;
    }

    this.createGrid();
  }

  changeCols() {
    if (this.cols < 1) {
      this.cols = 1;
    }

    if (this.cols > 20) {
      this.cols = 20;
    }

    this.createGrid();
  }

  openColorPopup(i: number, j: number) {
    this.selectedRow = i;

    this.selectedCol = j;

    if (this.grid[i][j] != '') {
      this.selectedColor = this.grid[i][j];
    } else {
      this.selectedColor = 'yellow';
    }

    this.showPopup = true;
  }

  validateColor() {
    this.grid[this.selectedRow][this.selectedCol] = this.selectedColor;

    this.showPopup = false;
  }

  cancelColor() {
    this.showPopup = false;
  }
}
