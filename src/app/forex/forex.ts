import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-forex',
  standalone: true,
  imports: [Header, Sidebar, Footer],
  templateUrl: './forex.html',
  styleUrl: './forex.css',
})
export class Forex implements AfterViewInit {
  private _table1 : any;

  constructor(private renderer: Renderer2, private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "layout-collapsed");

    this._table1 = $("#table1").DataTable({
      "columnDefs": [
        {
          "targets": 3,
          "className": "text-right",
        }
      ] 
    });

    this.bindTable1();
  }

  bindTable1(): void {
      console.log("bindTable1()");
      
      // URL to fetch exchange rates
      const ratesUrl = "https://openexchangerates.org/api/latest.json?app_id=cac8a16220124f96993d3b1c98a2ca88";
      // URL to fetch currency names
      const currenciesUrl = "https://openexchangerates.org/api/currencies.json";
    }
}
