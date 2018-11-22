import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products =[

    {
      id:1,
      name:"iPhone",
      amount:15000,
      isActive: true,
      photoPath: 'assets/images/iphone.jpg'

        },

        {
          id:2,
          name:"Nokia",
          amount:10000,
          isActive: true,          
          
          photoPath: 'assets/images/samsung.jpg'
          
            },

            {
              id:3,
              name:"Samsung",
              amount:25000,
              isActive: false,                        
              photoPath: 'assets/images/nokia.jpg'
              
                }
  ];


  constructor() { }

  ngOnInit() {
  }

}
