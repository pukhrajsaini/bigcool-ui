import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/contact.service';
import { QueryModel } from 'src/app/shared/models/query.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  queries: QueryModel[];
  constructor(private $router: Router, private $cs: ContactService, private $snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.fetchAllQueries();
  }

  onLogOut() {
    this.$router.navigate(['/']);
  }

  fetchAllQueries() {
    this.$cs.getAllQueries().subscribe(data => this.queries = data);
  }

  // tslint:disable-next-line:variable-name
  onDeleteQuery(_id: string) {
    this.$cs.deleteQuery(_id).subscribe(() => {
      this.openSnackBar('query deleted', 'ok');
    });
  }

  openSnackBar(data: string, action: string) {
    this.$snackBar.open(data, action, {
      duration: 2000
    });
  }

}
