import './app-info.sass'

const AppInfo = ({increased, employers}) => {
    
        return <>
            <div className="app-info">
                <h1>Учет соотрудников в компании N</h1>
                <h2>Общее число сотрудников: {employers}</h2>
                <h2>Премию получат: {increased}</h2>
            </div>
        </>
}

export default AppInfo