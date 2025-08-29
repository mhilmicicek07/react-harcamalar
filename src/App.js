import { useState, useEffect } from "react";
import "./App.css";
import Parca from "./Components/Parca";
import YeniHarcamaForm from "./Components/YeniHarcamaForm";

const baslangicHarcamalari = [
  { title: "Araç Bakımı", amount: 400, date: new Date(2023, 0, 14) },
  { title: "Sigorta Ödemeleri", amount: 60, date: new Date(2023, 0, 16) },
  { title: "Ev Alışverişi", amount: 220, date: new Date(2023, 1, 2) },
  { title: "Kira Ödemesi", amount: 300, date: new Date(2023, 1, 16) },
  { title: "Ödeme Başlığı", amount: 100, date: new Date(2023, 1, 29) },
];

function App() {
  const [expenses, setExpenses] = useState([]);

  // LocalStorage'dan verileri al
  useEffect(() => {
    const kayitliHarcamalar = JSON.parse(localStorage.getItem("harcamalar"));
    if (kayitliHarcamalar && kayitliHarcamalar.length > 0) {
      setExpenses(
        kayitliHarcamalar.map((h) => ({
          ...h,
          date: new Date(h.date), // Tarihi yeniden Date objesine çeviriyoruz
        }))
      );
    } else {
      setExpenses(baslangicHarcamalari);
    }
  }, []);

  // Harcamaları LocalStorage’a kaydet
  useEffect(() => {
    localStorage.setItem("harcamalar", JSON.stringify(expenses));
  }, [expenses]);

  // Yeni harcama ekleme
  const harcamaEkleHandler = (yeniHarcama) => {
    setExpenses((prevExpenses) => {
      const guncelHarcamalar = [yeniHarcama, ...prevExpenses];
      // Güncel tarih sıralaması (En yeni → En eski)
      return guncelHarcamalar.sort((a, b) => b.date - a.date);
    });
  };

  // Harcama silme
  const harcamaSilHandler = (index) => {
    setExpenses((prevExpenses) => {
      const guncelHarcamalar = prevExpenses.filter((_, i) => i !== index);
      return guncelHarcamalar;
    });
  };

  return (
    <>
      <h1>Harcamalar</h1>
      <YeniHarcamaForm onHarcamaEkle={harcamaEkleHandler} />
      <div className="expenses-container">
        {expenses.map((expense, index) => (
          <Parca
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={() => harcamaSilHandler(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
