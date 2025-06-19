import {useState} from 'react';
import './Lista.css';


const Lista = () =>{

    const [items, setItems] = useState ([]);
    const [inputValue,setInputValue] = useState("");
    const [inputAmount,setInputAmount]= useState("");
    const [inputType,setInputType]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            const newItem = {
                id : Date.now(),
                text: inputValue,
                amount: inputAmount,
                type: inputType,
            };

            setItems((prevItems)=> [...prevItems,newItem]);

            setInputValue("");
            setInputAmount("");
            setInputType("");
        }

    };

    const handleDelete = (itemRemove)=> {
        const updatedItems = items.filter(items=>items !== itemRemove);
        setItems(updatedItems);
    };

    const count = items.length;

     

    return (
        <div className="main-container">
            <h1>Lista de Compras</h1>
            <div className="container">
                <form onSubmit={handleSubmit} className="form-container">
                    <label htmlFor="product">Produto:</label>
                    <input type="text" id="product" className="input-field" placeholder="nome do produto..." 
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    />
                    
                    <label htmlFor="quantity">Quantidade:</label>
                    <input type="number" className="input-field" placeholder="0" min="1"
                    value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}
                    />                        <label htmlFor="unidade">Unidade:</label>
                    <select id="unidade" name="unidade" value={inputType} onChange={(e) => setInputType(e.target.value)}>
                        <option value="">selecione</option>
                        <option value="unidades">unidades</option>
                        <option value="kgs">kilos</option>
                        <option value="fardos">fardos</option>
                    </select>
                    
                    <button type="submit" className="submit-button">Inserir</button>
                </form>
                <span>Items: {count}</span>
            </div>
            {items.length === 0 && <p className ="empty"> Sem items</p>}
            <ul className="items-list">
                {items.map((item)=>(
                    <li key={item.id} className="items">
                        <p> Produto:</p> {item.text}<br/>
                        <p> Quantidade:</p> {item.amount}<p>{item.type} </p>
                        <button className="delete-button" onClick={()  => handleDelete(item)}> Apagar </button>
              
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lista