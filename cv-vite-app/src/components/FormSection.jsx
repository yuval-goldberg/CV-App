function FormSection({ icon, title, children }) {
    return (
        <div className="formSection">
            <div className="formSectionHeader">
                {icon && <span className="formSectionIcon">{icon}</span>}
                <h3>{title}</h3>
            </div>
            <div className="formSectionContent">
                {children}
            </div>
        </div>
    )
}

export default FormSection