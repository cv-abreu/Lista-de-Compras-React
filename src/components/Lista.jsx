import {useState} from 'react';
import './Lista.css';


const Lista = () =>{

    const [items, setItems] = useState ([]);
    const [inputValue,setInputValue] = useState("");
     const [inputAmount,setInputAmount]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            const newItem = {
                id : Date.now(),
                text: inputValue,
                amount: inputAmount,
            };

            setItems((prevItems)=> [...prevItems,newItem]);

            setInputValue("");
            setInputAmount("");
        }

    };

    const handleDelete = (itemRemove)=> {
        const updatedItems = items.filter(items=>items !== itemRemove);
        setItems(updatedItems);
    };



    return (
        <div className="container">
            <h1>Lista de Compras</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" className="input-field" placeholder="produto" 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="number" className="input-field" placeholder="quantidade"
                value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}
                />
                <button type="submit" className="submit-button">Inserir</button>
            </form>

            {items.length === 0 && <p className ="empty"> Sem items</p>}
            <ul className="items-list">
                {items.map((item)=>(
                    <li key={item.id} className="items">
                    <p> Produto:</p> {item.text}<br/>
                    <p> Quantidade:</p> {item.amount}<p>unidades </p>
                    <button className="delete-button" onClick={()  => handleDelete(item)}> Delete</button>
              
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lista