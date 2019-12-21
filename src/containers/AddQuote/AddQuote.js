import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";
import NavBar from "../../components/NavBar/NavBar";
import './AddQuote.css';

class AddQuote extends Component {
    state = {
        category: '',
        author: '',
        quoteText: '',
    };

    inputChange = event => this.setState({[event.target.name]: event.target.value});

    postQuote = async (event) => {
        event.preventDefault();
        const quote = {
            category: this.state.category,
            author: this.state.author,
            quoteText: this.state.quoteText,
        };
        await axiosQuotes.post('quotes.json', quote);
        this.props.history.push('/');
    };

    render() {
        return (
                <div>
                    <NavBar/>
                    <form className="addQuote" onSubmit={this.postQuote}>
                        <h2>Add Quote</h2>
                        <p>Category</p>
                        <input type="text" name="category" onChange={this.inputChange} list="category" autoComplete="off"/>
                        <datalist id="category">
                            <option>Star Wars</option>
                            <option>James Bond</option>
                            <option>John Wick</option>
                            <option>Humor</option>
                            <option>Motivation</option>
                        </datalist>
                        <p>Author</p>
                        <input type="text" name="author" onChange={this.inputChange} autoComplete='off'/>
                        <p>Quote Text</p>
                        <textarea cols="30" rows="10" name="quoteText" onChange={this.inputChange}/>
                        <p><button type="submit" className="btn btn-success">Save</button></p>
                    </form>
                </div>
        );
    }
}

export default AddQuote;