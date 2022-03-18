import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public data = [
    {

      num:'01',
      title:"GIỚI THIỆU CHUNG",
      text:"Cảm ơn quí khách đã đến với Cửa hàng Nhật Bản Hachi Hachi. \n \
      Lần đầu xuất hiện tại TPHCM vào năm 2007 mở đầu cho trào lưu hàng \
      Nhật Bản ở Việt Nam, đến nay hệ thống Cửa hàng Nhật Bản Hachi Hachi rất \
      hân hạnh là nhà bán lẻ cung cấp hơn 800 thương hiệu sản phẩm Nhật Bản và \
      trở thành một địa điểm mua sắm yêu thích của khách hàng. Hơn 60% sản phẩm \
      tại Hachi Hachi được sản xuất chính gốc tại Nhật, còn lại được gia công tại \
      Hàn Quốc, Trung Quốc, Thái Lan, Ba Lan… theo đơn đặt hàng riêng của các \
      công ty Nhật. Tất cả đều theo tiêu chuẩn chất lượng và thẩm mỹ Nhật Bản, \
      được thể hiện ở các tính năng độc đáo, màu sắc tinh tế, thanh nhã và độ an \
      toàn cao. Mỗi sản phẩm đều ẩn chứa trong đó những nỗ lực cải tiến và sáng \
      tạo từng chi tiết nhỏ để giúp đời sống hằng ngày thuận tiện và thú vị hơn. \
      Đến với Hachi Hachi, quí khách có thể hiểu thêm về lối sống và các vật phẩm \
      sinh hoạt thường ngày của người dân xứ hoa anh đào. Các mặt hàng được bán tại \
      Hachi Hachi cũng là các sản phẩm được người dân Nhật sử dụng hàng ngày và \
      đang hiện diện trên quầy kệ các siêu thị và cửa hàng tại Nhật cùng nhiều nước\
       trên thế giới, cũng là những sản phẩm mà chính nhân viên Hachi Hachi tin dùng \
       hàng ngày. Hachi Hachi hiểu rằng Retail is Detail (Bán lẻ là tỉ mỉ), không\
        chỉ trong chọn lựa các mặt hàng phù hợp, mà còn ở vận hành hệ thống xuyên \
        suốt để đảm bảo khách hàng có được trải nghiệm tốt nhất. ",
      img:'assets/img_nd/img_01.jpg',
      stylebg:'',
      styletext:'width:403px;margin: 17px 33px 0 51px;',
      styleimg:'margin:118px 0 0 0;',
      pc:[{
        text:' “ Với phương châm “Mỗi ngày tươi đẹp hơn” cùng đội ngũ trẻ trung,\
       tận tâm và hướng đến khách hàng, Hachi Hachi luôn nỗ lực để góp phần cho\
        cuộc sống thêm phần thú vị và thoải mái, mỗi nơi chốn đi về đều ấm cúng \
        và dễ chịu.”',
        styletext:'padding: 71px 0 80px 0;'
      }]
      },
    {
      num:'02',
      title:"TẦM NHÌN",
      styletitle:'margin: -5px 0 0 0;',
      text:"Trở thành thương hiệu đồng hành với mọi gia đình Việt Nam \
      về hàng gia dụng và hàng tiêu dùng nhập khẩu từ Nhật Bản và sản phẩm \
      nhãn hiệu Nhật Bản, đồng thời là thương hiệu được coi trọng bởi sự đóng \
      góp nâng cao giá trị cuộc sống cho khách hàng và nhân viên.",
      stylebg:'background-color:#F2F2F2;width:492px;height:310px;margin:26px 0 0 0;',
      styletext:'width:376px;margin:6px 0 0 44px',
      styleimg:'margin:0 0 29px 0;',
      img:'assets/img_nd/img_view.jpg'
    },
    {
      num:'03',
      title:'SỨ MỆNH',
      styletitle:'margin: -5px 0 0 0;',
      text:'• Hỗ trợ phụ nữ chăm sóc gia đình tiện lợi và thoải mái hơn,\
             cũng như chăm sóc bản thân tốt hơn và hài hòa giữa đời sống \
             gia đình và phát triển sự nghiệp• Giới thiệu phong cách sống \
             hiện đại, tiện lợi, quan tâm chăm sóc những nhu cầu tinh \
             tế của con người, hòa hợp thiên nhiên từ Nhật Bản',
      stylebg:'background-color:#F2F2F2;width:492px;height:310px;',
      styletext:'width:429px;margin:0 0 0 42px;',
      img:'assets/img_nd/img_sumenh.jpg'
    },
    {
      num:'04',
      title:'GIÁ TRỊ CỐT LÕI',
      styletitle:'margin: -5px 0 0 0;',
      text:'',
      img:'assets/img_nd/img_value.jpg',
      stylebg:'',
      styleimg:'margin:160px 0 0 -170px;',
    },
    {
      num:"05",
      title:"LỊCH SỬ PHÁT TRIỂN",
      styletitle:'margin: -5px 0 0 0;',
      styletext:'width:884px',
      child:[
        {
          a:"8/2007:",
          b:"khai trương CH Đồng Giá Nhật Bản Hachi Hachi đầu tiên tại 173 Nguyễn Văn Trỗi"
        },
        {
          a:"5/2010:",
          b:"chuyển đổi mô hình từ CH Đồng Giá sang CH Nhật Bản nhiều mức giá nhiều lựa chọn với sự ra đời của Hachi Hachi Phú Mỹ Hưng"
        },
        {
          a:"7/2017:",
          b:"đã mở 5 cửa hàng tại TPHCM"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
