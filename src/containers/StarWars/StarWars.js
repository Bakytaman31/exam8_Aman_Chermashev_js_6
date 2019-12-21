import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import {NavLink} from "react-router-dom";
import axiosQuotes from "../../axios-quotes";

class StarWars extends Component {
    state = {
        quotes : [],
    };

    async componentDidMount() {
        const request = await axiosQuotes.get('quotes.json');
        let quotes = [];
        for (let key in request.data){
            if (request.data[key].category === "Star Wars"){
                quotes.push({
                    category: request.data[key].category,
                    author: request.data[key].author,
                    quoteText: request.data[key].quoteText,
                    id: key,
                })
            }

        }
        this.setState({quotes})
    }
    deleteQuote = async () => {
        const quotes = [...this.state.quotes];
        await quotes.map((quote, index) => {
            axiosQuotes.delete('/quotes/' + quote.id + '.json');
            quotes.splice(quote[index],1);
            return true
        });
        return this.setState({quotes});
    };

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.quotes.map(quote => {
                        return(
                            <div key={quote.id}>
                                <h4>{quote.category}</h4>
                                <div style={{border: '1px solid #ccc', marginTop: '2%',marginBottom: '2%'}}>
                                    <p>{quote.quoteText}</p>
                                    <p>-{quote.author}</p>
                                    <NavLink to={`edit/${quote.id}`}>Edit</NavLink>
                                    |
                                    <button className="btn btn-danger" onClick={this.deleteQuote}>Delete</button>
                                </div>
                            </div>
                        )
                })}
            </div>
        );
    }
}

export default StarWars;