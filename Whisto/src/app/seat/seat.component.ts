import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-seat',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

    Movie = 'Avengers - End Game';
    Screen_No = 'INOX Cinemas';
    Time = 'WED, 7:30PM';

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];

    ticketPrice = 120;
    convFee = 30;
    totalPrice = 0;
    currency = 'Rs';

    constructor() { }

    getStatus = function(seatPos: string) {
        if (this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if (this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    };
  
    clearSelected = function() {
        this.selected = [];
    };
  
    seatClicked = function(seatPos: string) {
        const index = this.selected.indexOf(seatPos);

        if (index !== -1) {
            this.selected.splice(index, 1);
        } else {
            if (this.reserved.indexOf(seatPos) === -1) {
                this.selected.push(seatPos);
            }
        }
    };

    showSelected = function() {
        if (this.selected.length > 0) {
            alert('Selected Seats: ' + this.selected + '\nTotal: ' + (this.ticketPrice * this.selected.length + this.convFee));
        } else {
            alert('No seats selected!');
        }
    };

    ngOnInit() {
      }

}