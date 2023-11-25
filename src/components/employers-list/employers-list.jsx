import PropTypes from 'prop-types'
import EmployeesListItem from '../employers-list-item/employers-list-item'

import './employers-list.sass'

const EmployersList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return <>
        <ul className="app-list list-group">
            {elements}
        </ul>
    </>
}

EmployersList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired, 
        })
    ).isRequired,
};

export default EmployersList