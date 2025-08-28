import "./App.css";
import Parca from "./Components/Parca";

const expenses = [
  {
    title: 'Araç Bakımı', amount: 400, date: new Date(2023, 0, 14)
  },
  // {
  // title: 'Araç Bakımı', amount: 400, date: "2023 01"
  // },
  {
    title: 'Sigorta Ödemeleri', amount: 60, date: new Date(2023, 0, 16)
  },
  // {
  // title: 'Sigorta Ödemeleri', amount: 60, date: "2023 02"
  // },
  {
    title: 'Ev Alışverişi', amount: 220, date: new Date(2023, 1, 2)
  },
  // {
  //   title: 'Ev Alışverişi', amount: 220, date: "2023 03"
  // },
  {
    title: 'Kira Ödemesi', amount: 300, date: new Date(2023, 1, 16)
  },
  // {
  //   title: 'Kira Ödemesi', amount: 300, date: "2023 04"
  // },
  {
    title: 'Ödeme Başlığı', amount: 100, date: new Date(2023, 1, 29)
  },
];

// function App() {
// function App(expenses) {
function App() {
  return (
    <>
      <h1>Harcamalar</h1>
      {/* <h1>Harcamalar</h1> */}
      {/* <h1>Harcamalar</h1> */}
      {/* <h1>Harcamalar</h1> */}
      <Parca
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      // expense={expenses[0]}
      />
      <Parca
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      // expense={expenses[1]}
      />
      <Parca
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      // expense={expenses[2]}
      />
      <Parca
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      // expense={expenses[3]}
      />
      <Parca
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      // expense={expenses[4]}
      />
      {/* <Parca /> */}
      {/* <Parca /> */}
      {/* <Parca /> */}
      {/* <Parca /> */}
    </>
  );
}
//! JSX -> HTML ve JS

export default App;
