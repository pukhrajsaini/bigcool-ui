import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/contact.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(private $cs: ContactService, private $snackBar: MatSnackBar) { }
  queryForm: FormGroup = this.$cs.queryForm();

  contactInfo = [
    {
      icon: 'location_on',
      line: 'Jasinghpura khor, Jaipur, Rajasthan'
    },
    {
      icon: 'contact_phone',
      line: 8559989078,
    },
    {
      icon: 'contact_mail',
      line: 'bigcool.expert@gmail.com'
    }
  ];

  ngOnInit(): void {
  }

  onQuerySubmit() {
    const query = this.queryForm.value;
    this.$cs.addQuery(query).subscribe(data => {
      this.openSnackBar('we will contact you soon', 'ok');
      this.queryForm.reset();
    });

  }

  openSnackBar(message: string, action: string) {
    this.$snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
