

function Center({ children }) {
    return (
        <div style={{
            textAlign: 'top',
            width: '100vw',
            marginLeft: '80px',
            color: 'black',
            borderRadius: '12px',
            backgroundColor: '#ffaa00',
            border: '2px solid white',
            paddingLeft: '32px',
        }} >
            {children}
        </div>
    )
} 

export default Center;