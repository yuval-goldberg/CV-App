function SkillPil({ skill, index, onRemove }) {
    return (
        <div className="skillPillWrapper">
            <label className='skillPill'>{skill}<span><button className='skillPillRemove' onClick={() => onRemove(index)}>✕</button></span></label>
        </div>
    )
}

export default SkillPil