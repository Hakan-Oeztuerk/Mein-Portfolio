

function Center({ children }) {
    return (
        <div style={{
            textAlign: 'top',
            width: '100vw',
            marginLeft: '80px',
            color: 'white',
            borderRadius: '12px',
            backgroundColor: 'transparent',
            border: '2px solid rgba(255,255,255,0.12)',
            paddingLeft: '32px',
        }} >
            {children}
        </div>
    )
} 

export default Center;