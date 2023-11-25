import { Component } from 'react'
import './search-panel.sass'
class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch= (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return <>
            <div className=''>
                <input 
                    type="text" 
                    className='form-control search-input'
                    placeholder='Найти соотрудника'
                    value={this.state.term}
                    onChange={this.onUpdateSearch}
                />
            </div>
        </>
    }
}

export default SearchPanel