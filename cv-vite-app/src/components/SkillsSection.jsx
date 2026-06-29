import { useState } from "react"
import FormSection from "./FormSection.jsx"
import SkillPil from "./SkillPill.jsx"
import { Lightbulb } from "lucide-react"

function SkillsSection({ data, onAdd, onRemove }) {
    const [name, setName] = useState('')

    function handleRemoveSkill(index) {
        onRemove(index)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ',') {
            if (name.trim() !== '') {
                onAdd(name)
                setName('')
            }
        }
    }

    return (
        <FormSection title={'Skills'} icon={<Lightbulb size={16} color="#009689" />}>
            <div className="skillsWrapper">
                {data.skills.length > 0 ? (
                    data.skills.map((skill, index) => (
                        <SkillPil
                            key={skill.id}
                            skill={skill.skill}
                            index={index}
                            onRemove={handleRemoveSkill}
                        />
                    ))
                ) : (
                    <label>You Are Not Talented :(</label>
                )}
            </div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                value={name}
                placeholder="Add Skill..."
            />
            <div>
                <label>Add your work skills by pressing <span className="keyboardKey">Enter</span> or <span className="keyboardKey">,</span></label>
            </div>
        </FormSection>
    )
}

export default SkillsSection