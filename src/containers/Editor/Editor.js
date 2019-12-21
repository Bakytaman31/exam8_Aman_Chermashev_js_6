import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";

class Editor extends Component {
    state = {
        category: '',
        author: '',
        quoteText: '',
    };

    async componentDidMount(){
        const id = this.props.match.params.id;
        const response = await axiosQuotes.get('quotes/'+ id + '.json');
        this.setState({
            category: response.data.category,
            author: response.data.author,
            quoteText: response.data.quoteText,
        });
    }

    changeData = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
    };

    editQuote = async (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const patch = {
            category: this.state.category,
            author: this.state.author,
            quoteText: this.state.quoteText,
        };
        await axiosQuotes.put(`/quotes/${id}.json`, patch);
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <form onSubmit={this.editQuote}>
                    <h2>Edit a quote</h2>
                    <p>Category</p>
                    <input type="text"
                           list="category"
                           name="category"
                           onChange={this.changeData}
                           value={this.state.category}/>
                    <datalist id="category">
                        <option>Star Wars</option>
                        <option>James Bond</option>
                        <option>John Wick</option>
                        <option>Humor</option>
                        <option>Motivation</option>
                    </datalist>
                    <p>Author</p>
                    <input type="text"
                           name="author"
                           onChange={this.changeData}
                           value={this.state.author}/>
                    <p>Quote text</p>
                    <textarea cols="30"
                              rows="10"
                              name="quoteText"
                              onChange={this.changeData}
                              value={this.state.quoteText}/>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
            </div>
        );
    }
}

export default Editor;