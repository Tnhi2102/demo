import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu = [
    {text:"TRANG CHỦ",ic :''},
    {text:"GIỚI THIỆU",ic:''},
    {text:"SHOP", ic:'abc'},
    {text:"KHUYẾN MÃI", ic:''},
    {text:"BLOG", ic:''},
    {text:"THƯƠNG HIỆU",ic:''},
    {text:"TIN TỨC", ic:''},
    {text:"CHÍNH SÁCH BÁN HÀNG", ic:''},
    {text:"LIÊN HỆ", ic:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
