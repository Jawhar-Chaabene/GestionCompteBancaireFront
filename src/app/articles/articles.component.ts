import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GLOBAL } from '../app-config';
import { MatSort } from '@angular/material/sort';
import { ArticleService } from 'src/Services/article.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormArticleComponent } from '../form-article/form-article.component';


@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit, OnInit {
  tabArticle: any[] = [];

  dataSource = new MatTableDataSource<any>();
  constructor(private AS: ArticleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllArticles();
  }


  getAllArticles(): void {
    this.AS.GETALL()
      .subscribe((r) => {
        this.tabArticle = r
        this.dataSource = new MatTableDataSource<any>(this.tabArticle);
      });
  }
  displayedColumns: string[] = ['id', 'type', 'titre', 'lien', 'date', 'sourcepdf'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Notez l'utilisation du '!' pour indiquer à TypeScript que cette propriété sera initialisée après la construction.

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  open() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(FormArticleComponent, dialogConfig);
  }
}


