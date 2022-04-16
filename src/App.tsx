
import React ,{useEffect}from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


function App() {
  const [post, setPost] = React.useState();
  const [slectnumstate, setslectnumstate] = React.useState([]);
  const todoufuken = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"]
  const labels = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18"];
  const headers = {
    'X-API-KEY': 'XKTYU01YdTFuFKoRNLlev4Wk6GJAqFgPiv8QaiIM'
  }
  const buttom = () :void=> {
    const elements = document.getElementsByName("select");

    let posts = [];
    for (let i=0; i<elements.length; i++){
      {/* @ts-ignore */}
      if (elements[i].checked){
        {/* @ts-ignore */}
        console.log(elements[i].value);
        {/* @ts-ignore */}
        {/* @ts-ignore */}
        posts.push(elements[i].value);
        console.log(posts);
        {/* @ts-ignore */}
        setslectnumstate(posts);
        console.log(slectnumstate);
      }
    }
 }
 React.useEffect(() => {
  let datas :string[]= [];
  slectnumstate.forEach(v => {

  axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${v}`,{headers: headers}).then((response) => {
    datas.push(response.data.result.data[0].data);
    console.log(datas); 
  });


});
}, [slectnumstate]);
  const get :Array<string>=[];
  const selectnum :Array<number>=[];
  const dataset  :Array<string>=[];
  let datavalue: Array<number> = [];
  var hash1: { lavel: string; data: string; borderColor:string;} = { lavel: "", data: "", borderColor:"",};
  const test =[
    {
      label: "A社",
      data: [65, 59, 60, 81, 56, 55],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "B社",
      data: [60, 55, 57, 61, 75, 50],
      borderColor: "rgb(75, 100, 192)",
    },
  ]
  let graphData = {
    labels: labels,
    datasets: test,
  };


 
//console.log(test);

  //var value: Array<number> = [];

  //console.log(dataset);


  const options: {} = {
    maintainAspectRatio: false,
    responsive: false
  };

  const divStyle: React.CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
    margin: "10px",
    width: "500px",
  };
  const Selectstyle: React.CSSProperties = {
    display: "inline-block",
    width: window.screen.width*0.3,
    height: "50px",
    margin: "10px",
  };
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
  const Width :number=  window.screen.width*0.3; 
  const Height :number= window.screen.height*0.3;
  //console.log(  window.screen.height);
  return (
    <div className="App" style={divStyle}>
  <div style={Selectstyle}>
  <label>
      <div style={sell}><input type="checkbox" name="select" value="1"/><p style={p}>北海道</p></div>
      <div style={sell}><input type="checkbox" name="select" value="2"/><p style={p}>青森県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="3"/><p style={p}>岩手県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="4"/><p style={p}>宮城県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="5"/><p style={p}>秋田県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="6"/><p style={p}>山形県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="7"/><p style={p}>福島県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="8"/><p style={p}>茨城県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="9"/><p style={p}>栃木県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="10"/><p style={p}>群馬県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="11"/><p style={p}>埼玉県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="12"/><p style={p}>千葉県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="13"/><p style={p}>東京都</p></div>
      <div style={sell}><input type="checkbox" name="select" value="14"/><p style={p}>神奈川県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="15"/><p style={p}>新潟県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="16"/><p style={p}>富山県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="17"/><p style={p}>石川県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="18"/><p style={p}>福井県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="19"/><p style={p}>山梨県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="20"/><p style={p}>長野県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="21"/><p style={p}>岐阜県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="22"/><p style={p}>静岡県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="23"/><p style={p}>愛知県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="24"/><p style={p}>三重県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="25"/><p style={p}>滋賀県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="26"/><p style={p}>京都府</p></div>
      <div style={sell}><input type="checkbox" name="select" value="27"/><p style={p}>大阪府</p></div>
      <div style={sell}><input type="checkbox" name="select" value="28"/><p style={p}>兵庫県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="29"/><p style={p}>奈良県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="30"/><p style={p}>和歌山県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="31"/><p style={p}>鳥取県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="32"/><p style={p}>島根県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="33"/><p style={p}>岡山県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="34"/><p style={p}>広島県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="35"/><p style={p}>山口県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="36"/><p style={p}>徳島県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="37"/><p style={p}>香川県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="38"/><p style={p}>愛媛県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="39"/><p style={p}>高知県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="40"/><p style={p}>福岡県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="41"/><p style={p}>佐賀県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="42"/><p style={p}>長崎県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="43"/><p style={p}>熊本県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="44"/><p style={p}>大分県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="45"/><p style={p}>宮崎県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="46"/><p style={p}>鹿児島県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="47"/><p style={p}>沖縄県</p></div>

  </label>
        <input type="button" value="確認" onClick={buttom}/>
  
  </div>
      <Line
        height={300}
        width={300}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
}

export default App;
