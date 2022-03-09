import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  public data = [
    {
      name: "Hệ thống tư vấn quản lý trực tuyến OOC",
      id: "Mã",
      description: "Mô tả chức năng - nhiệm vụ",
      child: [
        {
          name: "Giám đốc",
          id: "BGD-1",
          description: "Điều hành hoạt động doanh nghiệp. Trực tiếp phụ trách doanh nghiệp",
          child: [
            {
              name: "Phó giám đốc phụ trách kinh doanh",
              id: "BGD-2",
              description: "Điều hành khối kinh doanh",
              child: [
                {
                  name: "Phòng phát triển thị trường",
                  id: "PTTT",
                  description: "Marketing, chính sách giá cước, xúc tiền thương mại, quảng cáo, quản lý thương mại",
                  child: []
                },

                {
                  name: "Phòng kinh doanh",
                  id: "KD",
                  description: "Mô tả chung...",
                  child: []
                }
              ]
            },

            {
              name: "Phòng tài chính kế toán",
              id: "TCKT",
              description: "Quản trị tài chính DN & đầu tư tài chính công tác kế toán",
              child: []
            },

            {
              name: "Phòng quản trị nguồn nhân lực",
              id: "QTNNL",
              description: "Xây dựng hệ thống & các chính sách nhân sự thực hiện",
              child: []
            },

            {
              name: "Phòng R&D",
              id: "RD",
              description: "Mô tả chung...",
              child: []
            },

            {
              name: "Phòng hành chính tổng hợp",
              id: "HC",
              description: "Mô tả chung...",
              child: []
            },

            {
              name: "Phòng kỹ thuật",
              id: "BGD-1-7",
              description: "Mô tả chung...",
              child: []
            }
          ]
        }
      ]
    }]


  constructor() { }

  ngOnInit(): void {
  }

}
