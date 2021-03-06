import {Component, OnInit} from '@angular/core';
import {IAddress} from '../interface/IAddress';
import {AddressService} from '../service/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  address: IAddress[] = [];

  constructor(private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.addressService.shouldRefresh.subscribe(result => {
      this.getAll();
    });
  }

  getAll(): void {
    this.addressService.getAllAddress().subscribe(result => {
      this.address = result;
    });
  }

  deleteAddress(id: number): void {
    if (confirm('You want to delete?')) {
      this.addressService.deleteAddress(id).subscribe(result => {
        this.addressService.shouldRefresh.next();
      });
    }
  }
}
