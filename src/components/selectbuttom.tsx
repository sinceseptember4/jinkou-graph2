import React from "react";
import Axios from "axios";


const headers = {
  'X-API-KEY': process.env.REACT_APP_API
}
let datas :string[]= [];

const p: React.CSSProperties = {
  display: "inline-block",
  width: "100px",
  height: "30px",
  margin: "0",
};
const sell: React.CSSProperties = {
  display: "inline-block",
  width: "120px",
  height: "30px",
  margin: "0",
};
const Width :number=  document.documentElement.clientWidth*0.9; 
const Height :number= Width*0.5;



const SelectButtom = () => {
  const [Data,setData] = React.useState<string[]>([]);
  React.useEffect(() => { 
    {/* @ts-ignore */}
    Axios.get(`https://opendata.resas-portal.go.jp/api/v1/prefectures`,{headers: headers}).then((response) => {

      datas = response.data.result
      setData(response.data.result);

    }).catch((error) => {
      alert("エラーが発生しました。"+ error)
    });
  }, []);
  return <>
    {console.log(Data)}
    {Data.map((data, index) => {
          return (
            <div key={index} style={sell} className="list-row">
              <input type="checkbox" name="select" value="1"  /><p style={p} >北海道</p>
            </div>
          );
        })}


  </>
  

}

export default SelectButtom;