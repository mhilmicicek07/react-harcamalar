import "./Parca.css";

// function Parca(expenses) {
// function Parca() {
//! not => props react standartlarına göre belirlenmiş bir yazım stilidir ve sözde bir objeye karşılık gelir. yerine farklı kelimeler kullanılabilir ama globalde props kullanılır.
function Parca(props) {
    // const expenses = [
    //     {
    //         title: 'Araç Bakımı', amount: 400, date: new Date(2023, 1, 15)
    //     },
    //     {
    //         title: 'Sigorta Ödemeleri', amount: 60, date: new Date(2023, 1, 29)
    //     },
    //     {
    //         title: 'Ev Alışverişi', amount: 220, date: new Date(2023, 2, 3)
    //     },
    //     {
    //         title: 'Kira Ödemesi', amount: 300, date: new Date(2023, 3, 4)
    //     },
    // ];

    // const date = new Date();
    // // const title = "Araç bakı";
    // const title = "Araç bakımı";
    // // const title2 = "Ev alışverişi";
    // const amount = 400;

    return (
        <div className="expense-card">
            {/* <> */}
            {/* <h2 className="classverme">Başlık Başlık</h2> */}
            {/* <h2 className="main-title">Başlık Başlık</h2>
                <p id="description">Açıklama</p> */}
            {/* <div>Date</div> */}
            {/* <div>29.01.2023</div> */}
            {/* <div>Date</div> */}
            {/* <div>{date}</div> */}
            {/* <div>{date.toISOString()}</div> */}
            {/* <div>{props.date.toISOString()}</div> */}
            <div>
                {/* <div>Day</div> */}
                <div>{props.date.toLocaleString("en-US", {day : "numeric"})}</div>
                {/* <div>{props.expense.date.toLocaleString("en-US", {day : "numeric"})}</div> */}
                {/* <div>Month</div> */}
                {/* <div>{props.expense.date.toLocaleString("en-US", {month : "long"})}</div> */}
                <div>{props.date.toLocaleString("en-US", {month : "long"})}</div>
                {/* <div>Year</div> */}
                {/* <div>{props.expense.date.toLocaleString("en-US", {year : "numeric"})}</div> */}
                <div>{props.date.toLocaleString("en-US", {year : "numeric"})}</div>
            </div>
            {/* <div>{expenses[0].date.toISOString()}</div> */}
            {/* <div>{props.expenses[0].date.toISOString()}</div> */}
            {/* <h2>Title</h2> */}
            {/* <h2>{title}</h2> */}
            <h2>{props.title}</h2>
            {/* <h2>{props.expense.title}</h2> */}
            {/* <h2>{expenses[0].title}</h2> */}
            {/* <h2>{props.expenses[0].title}</h2> */}
            {/* <h2>{(title, title2)}</h2> */}
            {/* <h2>Araç Bakımı</h2> */}
            {/* <p>$amount</p> */}
            {/* <p>$1000</p> */}
            {/* <p>${amount}</p> */}
            <p>${props.amount}</p>
            {/* <p>${props.expnese.amount}</p> */}
            {/* <p>${amount}</p> */}
            {/* <p>${expenses[0].amount}</p> */}
            {/* <p>${props.expenses[0].amount}</p> */}
            {/* </> */}
        </div>
    );
}
//! FRAGMENT <> </> -> div kullanmak yerine kullanılır.
//! hardcoded -> dinamik şekilde veriler döndürülmediğinde verilen isim yani sabit veriler yazılırsa elemanlara

export default Parca;
