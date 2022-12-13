export const CustomAlert = ({ message, close }) => {
    return (
        <div style={{ zIndex: 10, position: 'fixed', width: 'max-content', fontSize: '14px', top: '20px', right: '20px' }} className="alert alert-danger alert-dismissible fade show" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={() => close()}></button>
        </div>
    )
}