import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private connection: ConnectionService) {}

  ngOnInit(): void {}

  async Submit() {
    alert('Response Captured. We will get back to you');

    //emailjs.send()
    this.connection.PostMessage('Dummy');
  }
}
