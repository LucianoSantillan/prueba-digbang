function Button({ children, style }) {
    return (
        <button style={{ width: `100%`, background: "#0b548b", fontWeight: "bold", padding: "5px 0px", border: 0, color: "white", ...style }}>
            {children}
        </button>
    )
}

export default Button;