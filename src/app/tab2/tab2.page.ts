import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import { ModalService } from '../modal/modal.service';
import { ViewbookingPage } from './viewbooking/viewbooking.page';

@Component({selector: 'app-tab2', templateUrl: 'tab2.page.html', styleUrls: ['tab2.page.scss']})
export class Tab2Page {

    statusList = ['pending', 'processing', 'completed', 'delivered']

    bookings : any;
    userBookings : any;

    constructor(private dataService : DataService,
        private modalService: ModalService
        ) {}

    ngOnInit(): void {
        this.getBookings();


    }

    viewBooking(booking) {
        console.log(" Btn Click working");
        this.modalService.presentModal(
          ViewbookingPage,
          {
            type: '',
            booking: booking,
          },
        );
      }
    getBookings() {

        this.dataService.getAdminBookings().on('value', (snapshot) => {
            console.log('snapshot', snapshot.val());

            this.bookings = snapshot.val() || [];
        })

    }

    statusChanged(event, booking, index) {
        console.log('event', event.detail.value);
        console.log('booking', booking);
        this.bookings[index]['status'] = event.detail.value;

        console.log('bookings', this.bookings);


        this.updateAdminBookings(booking.email);
        this.updateUserBooking(booking, event.detail.value);
        return;


    }


    updateAdminBookings(email) {
        this.dataService.updateAdminBookings(this.bookings).then((response) => {
            console.log('reponse from updating bookings for admin', response);


        }).catch((error) => {
            console.log('error', error);
        })
    }


    updateUserBooking(booking, status) { // this.dataService
        this.dataService.getBookingOfUser(booking.email).on('value', (snapshot) => {
            console.log('snapshot', snapshot.val());
            this.userBookings = snapshot.val();


        })


        if (this.userBookings) {
            this.userBookings.forEach((item) => {
                if (item.name === booking.name) {
                    item.status = status;
                }
            })

            console.log('user bookings', this.userBookings);

            this.dataService.updateUserBookings(this.userBookings, booking.email).then((response) => {
                console.log('reponse from updating bookings for user', response);

            }).catch((error) => {
                console.log('error', error);
            })
        }


    }

}
