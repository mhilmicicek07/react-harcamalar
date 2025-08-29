import { useState } from "react";
import "./YeniHarcamaForm.css";

function YeniHarcamaForm({ onHarcamaEkle }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const yeniHarcama = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onHarcamaEkle(yeniHarcama);

    // Formu sıfırla
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      <div className="form-control">
        <label>Başlık</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Harcama adı"
        />
      </div>

      <div className="form-control">
        <label>Miktar</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₺"
        />
      </div>

      <div className="form-control">
        <label>Tarih</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className="add-button">
        Harcama Ekle
      </button>
    </form>
  );
}

export default YeniHarcamaForm;
