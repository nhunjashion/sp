import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';


class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Xiaomi Redmi Note 11(SP1)",
        "src": [
            "https://cdn.tgdd.vn/Products/Images/42/245261/Xiaomi-redmi-note-11-blue-600x600.jpg",
            "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/8/0/800x800-640x640-5_2.png",
            "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/1/11_4_32.jpg",
            "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/n/o/note-pro-4_1.png"
          ],
        "description": "Xiaomi Redmi Note 11",
        "content": "Điện thoại Xiaomi Redmi Note 11 được trang bị màn hình 6.43 inches trên tấm nền AMOLED mang lại khả năng hiển thị hình ảnh sống động. Điện thoại sẽ chạy trên con chip Snapdragon 680 8 nhân cùng bộ nhớ RAM 4 GB. Máy cũng đáp ứng tootsa nhu cầu nhiếp ảnh với camera 50 MP.",
        "price": 4500000,
        "colors":["darkgray","lightblue","blue"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />

                <a href="#" target="_blank">
                  <button className="cart">Thêm vào giỏ hàng</button>
                </a>
                
                <a href="#" target="_blank">
                  <button className ="buy"> Mua ngay </button>
                </a>
              </div>
              <div>
                <div >
                    <h2>Thông số kỹ thuật:</h2>
                </div>
               <table>
                 <tr>
                   <td>Kích thước màn hình</td>
                   <td>6.66 inches</td>  
                 </tr>
                 <tr>
                   <td>Công nghệ màn hình</td>
                   <td>AMOLED</td>
                 </tr>                  
                 <tr>
                   <td>Dung lượng RAM</td>
                   <td>8 GB</td>
                 </tr>
                 <tr>
                   <td>Bộ nhớ trong</td>
                   <td>128 GB</td>
                 </tr>
                 <tr>
                   <td>Thẻ SIM</td>
                   <td>2 SIM (Nano-SIM)</td>
                 </tr>
                 <tr>
                   <td>Hệ điều hành</td>
                   <td>Android 11, MIUI 12.5</td>
                 </tr>
                 <tr>
                   <td>Chipset</td>
                   <td>MediaTek Helio G96</td>
                 </tr>
                 <tr>
                   <td>Pin</td>
                   <td>Li-Po 5000 mAh, non-removable</td>
                 </tr>
             </table>
                </div>
               
             
              
            </div>
            
          ))
        }
        
      </div>
    );
  };
}

export default App;
