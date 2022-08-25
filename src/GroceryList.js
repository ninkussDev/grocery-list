import { Component } from "react";
import image from './shoppingbag.png'

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

// ['один из варинатов написания']
    // onChangeEvent(event) {
    //     console.log(event.target.value)
    // }

    //     render() {
    //         return(
    //             <div>
    //                 <input type="text"
    //                 placeholder="What do you wont to buy?"
    //                 onChange={this.onChangeEvent}
    //                 value={this.state.userInput} />

    //             </div>
    //         )
    //     }

// [более популярный вариант написания. e - event]
        onChangeEvent(e) {
            this.setState({userInput: e});
        }

        addItem(input) {
            if (input === '') {
                alert ('Please enter an item')
            }
            else {
            let listArray = this.state.groceryList;
            listArray.push(input)
            // [ниже мы добавляем то что написал пользователь из листэррей и следующим опустошаем, то есть после нажатия add строка ввода пустая станет]
            this.setState({groceryList: listArray, userInput: ''})
        }
        }

        deleteItem() {
            let listArray = this.state.groceryList;
            listArray = [];
            this.setState({groceryList: listArray})
        }

        crossedWord(e) {
            const li = e.target;
            li.classList.toggle('crossed')
        }

        onFormSubmit(e) {
            e.preventDefault();
        }
    
            render() {
                return(
                    <div>
                        <form onSubmit={this.onFormSubmit}>
                            <div className='container'>
                                <input type="text"
                                placeholder="What do you wont to buy?"
                                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                                value={this.state.userInput} />
                            </div>
                            <div className='container'>
                                <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">Add</button>
                            </div>
                            <ul>
                                {this.state.groceryList.map((item, index) => (
                                    <li onClick={this.crossedWord} key={index}>
                                        <img src={image} alt="shopping bag"/>
                                        {item}</li>
                                ))}
                            </ul>
                            <div className='container'>
                                <button onClick={ () => this.deleteItem()} className="btn btn-delete">Delete</button>
                            </div>
                        </form>
                    </div>
                )
            }



}