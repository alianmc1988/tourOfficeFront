import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  lorem:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque cupiditate ipsum quaerat obcaecati. Libero debitis consectetur explicabo in, commodi, ipsam quod suscipit rem nemo dolorem minima distinctio sunt, quibusdam enim? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eius nesciunt doloremque repellat quae eum odit quo similique voluptate doloribus recusandae optio ipsum praesentium, labore dolorum saepe error nobis consequuntur nisi architecto dolor. Rerum quas soluta doloremque quam id dolorem nemo quae quidem voluptas ab hic, itaque ratione impedit totam illo doloribus perferendis corrupti adipisci recusandae, praesentium nobis cupiditate velit! Veritatis blanditiis vero perspiciatis quam excepturi aspernatur distinctio consequuntur assumenda iste placeat, debitis voluptatibus consequatur impedit non fugiat, culpa quae accusantium minima neque, natus temporibus sit. Quasi aliquid mollitia ipsum vitae hic, quia totam magni exercitationem, tempora, doloremque perspiciatis aperiam."
  constructor() {
   
  }
  ngOnInit(): void {
  }

}
