import { Page } from "./../../common/page";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-footer-pagination",
  templateUrl: "./footer-pagination.component.html",
  styleUrls: ["./footer-pagination.component.css"]
})
export class FooterPaginationComponent implements OnInit {
  @Output() changePageNumber: EventEmitter<number> = new EventEmitter<number>();
  @Output() changePageSize: EventEmitter<number> = new EventEmitter<number>();

  @Input() page: Page;

  itensPerPageSize: number[];
  pageNumber: number = 1;
  newPageSize: number;

  constructor() {
    this.itensPerPageSize = [8, 16, 24, 32];
  }

  updatePageNumber() {
    this.changePageNumber.emit(this.pageNumber - 1);
  }

  updatePageSize() {
    this.changePageSize.emit(this.newPageSize);
  }

  ngOnInit() {
    this.newPageSize = this.page.size;
  }

  get pageSize() {
    if (this.page === undefined) {
      return 0;
    }
    return this.page.size;
  }

  get totalItens() {
    if (this.page === undefined) {
      return 0;
    }
    return this.page.totalElements;
  }
}
