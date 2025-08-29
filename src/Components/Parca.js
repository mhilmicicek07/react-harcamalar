import "./Parca.css";

function Parca({ title, amount, date, onDelete }) {
  return (
    <div className="expense-card">
      <div className="expense-date">
        <div className="day">{date.toLocaleString("tr-TR", { day: "2-digit" })}</div>
        <div className="month">{date.toLocaleString("tr-TR", { month: "long" })}</div>
        <div className="year">{date.toLocaleString("tr-TR", { year: "numeric" })}</div>
      </div>
      <div className="expense-info">
        <h2>{title}</h2>
        <p className="amount">{amount} ₺</p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        Sil
      </button>
    </div>
  );
}

export default Parca;
