import React, {useState} from 'react';
import ToDoLists from './ToDoLists';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const deleteItems = (id) => {
    console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index!== id;
      })
    })
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const[count, setCount] = useState(0);

  const increase = () => {
    setCount(count+1);
  }

  const decrease = () => {
    if (count === 0) {
      alert("You have reached 0 limit!!");
    } else {
      setCount(count-1);
    }
  }

  return (
    <>
      <div className='main_div'>
        <div className='side_div'>
          <br />
          <br />
          <h1 className='side_heading'>{count}</h1>
          <br />
          <div className='btn_div'>
          <Tooltip title="Add">
          <Button className='side_button plus' onClick={increase}>
            <AddIcon />
            {/* Increm */}
          </Button>
          </Tooltip>
          
          <Tooltip title="Delete">
          <Button className='side_button del' onClick={decrease}>
            <DeleteIcon />
            {/* Decrem */}
          </Button>
          </Tooltip>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' value={inputList} placeholder='Add a Item' onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {items.map((itemval, index) => {
              return <ToDoLists key={index} onSelect={deleteItems} id={index} text = {itemval}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;