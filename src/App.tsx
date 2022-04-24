
import React from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);


function App() {
  const labels = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18"];

  const [graphdata, setgraphdata] = React.useState< {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
    }[];
}>({
  labels: labels,
  datasets: [
    {
      label: "宮崎県",
      data:  [1134590, 1080692, 1051105, 1085055, 1151587, 1175543, 1168907, 1175819, 1170007, 1153042, 1135233, 1104069, 1066719, 1023170, 976626, 928034, 876863, 824806]      ,
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "長崎県",
      data: [1760421, 1641245, 1570245, 1571912, 1590564, 1593968, 1562959, 1544934, 1516523, 1478632, 1426779, 1377187, 1320596, 1257939, 1192223, 1124291, 1053851, 982200]      ,
      borderColor: "rgb(75, 100, 192)",
    },
  ],
});

  const [slectnumstate, setslectnumstate] = React.useState<never[]>([]);
  const [Statelabels, setStatelabels] = React.useState(0);
  const [Stateaxios, setStateaxios] = React.useState();
  const todoufuken = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"]
    const headers = {
    'X-API-KEY': 'XKTYU01YdTFuFKoRNLlev4Wk6GJAqFgPiv8QaiIM'
  }
  const get :Array<string>=[];
  const selectnum :Array<number>=[];
  const dataset  :Array<string>=[];
  let datavalue: Array<number> = [];
  let datasetbefore :{
    label: string;
    data: number[];
    borderColor: string;
}[]=[{
  label: "aaa",
  data: [0],
  borderColor: "a",
},{
  label: "bbb",
  data: [1],
  borderColor: "a",
}]
  
function axiosf (d :number) {

  return 
  }

async function async(i :number) {
   
  const elements = document.getElementsByName("select");

  let posts :never[]= [];
  for (let i=0; i<elements.length; i++){
    {/* @ts-ignore */}
    if (elements[i].checked){
      {/* @ts-ignore */}
      posts.push(elements[i].value);
      setslectnumstate(posts);
    }
  }
  //setgraphdata() ;
let cnt :number = 0;
var musicians= new Array();
console.log(slectnumstate);
datasetbefore =[];
for await (const v of posts) {
  //console.log(element);

  
    let datavalue :number[]= [];
  
    axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${v}`,{headers: headers}).then((response) => {
      let datas :string[]= [];
      datas = response.data.result.data[0].data;
      //console.log(response);
      for (let step = 0; step < datas.length; step++) {
      {/* @ts-ignore */}
      datavalue.push(datas[step].value);
      }
      console.log(datavalue);
      {/* @ts-ignore */}
      setStateaxios(datavalue);
      
        });
    let red :number= Math.floor( Math.random() * 256 ) ;;
    let bule :number= Math.floor( Math.random() * 256 ) ;;
    let green :number= Math.floor( Math.random() * 256 ) ;;
    let rgb = `rgb(${red}, ${bule}, ${green})`;
    let hash: { label: string; data: number[]; borderColor:string;} ={ label: todoufuken[v-1], data: datavalue, borderColor: rgb};;
    console.log(hash);
    datasetbefore.push(hash);
  


};
cnt=cnt+1;
let graphData = {
labels: labels,
datasets: datasetbefore,
};


console.log(datasetbefore);

{/* @ts-ignore */}
setgraphdata(graphData) ;
//console.log(graphdata);

};

  const  buttom = () :void => {
    async(1);
}
 React.useEffect(() => {
   
}, [Stateaxios]);
 
React.useEffect(() => {
  console.log(graphdata);
}, [graphdata]);


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
  let Width :number=  window.screen.width*0.3; 
  let Height :number= window.screen.height*0.3;
  //console.log(  window.screen.height);



  return (
    <>
  <div style={Selectstyle}>
  <label>
      <div style={sell}><input type="checkbox" name="select" value="1"defaultChecked/><p style={p} >北海道</p></div>
      <div style={sell}><input type="checkbox" name="select" value="2"defaultChecked/><p style={p}>青森県</p></div>
      <div style={sell}><input type="checkbox" name="select" value="3"defaultChecked/><p style={p}>岩手県</p></div>
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
  </div>
        <input type="button" value="確認" onClick={buttom}/>
      <Line
        height={Height}
        width={Width}
        data={graphdata}
        options={options}
        id="chart-key" 
      />
    </>
  );
}

export default App;
