import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../../css/search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const address = this.state.text;
        if (address.length > 0) {
            this.props.history.push(`/address/${address}`)
        }
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className = "search-bar">
                    <i className="fas fa-search search-icon"></i>
                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.text} 
                        placeholder="Lookup addresses..">
                    </input>
                    <button 
                        className={this.state.text.length > 0 ? "search-button search-enter-true" : "search-button search-enter-false"}>
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search)