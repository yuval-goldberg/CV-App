import { useState } from "react"
import FormInput from './FormInput.jsx'
import FormSection from './FormSection.jsx'
import { Briefcase } from 'lucide-react'
import { Calendar } from 'lucide-react'

function Experience({ index, data, onChange, onRemove }) {
    return (
        <div className="workExperienceWrapper">
            {
                index > 0 && (
                    <div>
                        <button className="removeExperienceBtn" onClick={() => onRemove(index)}>✕ Remove</button>
                    </div>
                )
            }
            <div>
                <FormInput label={'JOB TITLE'} placeholder={'UX Designer'} value={data.experiences[index].jobTitle} onChange={(e) => onChange(index, 'jobTitle', e.target.value)}></FormInput>
                <FormInput label={'COMPANY'} placeholder={'Dropbox'} value={data.experiences[index].company} onChange={(e) => onChange(index, 'company', e.target.value)}></FormInput>
            </div>
            <div>
                <FormInput label={'LOCATION'} placeholder={'San Francisco, CA'} value={data.experiences[index].location} onChange={(e) => onChange(index, 'location', e.target.value)}></FormInput>
            </div>
            <div>
                <FormInput label={'START DATE'} type='extraInfoInput' icon={<Calendar size={16} />} what="date" value={data.experiences[index].startDate} onChange={(e) => onChange(index, 'startDate', e.target.value)}></FormInput>
                <FormInput label={'END DATE'} type='extraInfoInput' icon={<Calendar size={16} />} what="date" value={data.experiences[index].endDate} onChange={(e) => onChange(index, 'endDate', e.target.value)}></FormInput>
            </div>
            <div className="descriptionWorkExperience">
                <label className="inputLabel">DESCRIPTION</label>
                <textarea className="proSummaryTextbox" value={data.experiences[index].description} onChange={(e) => onChange(index, 'description', e.target.value)}></textarea>
            </div>
        </div>
    )
}

function WorkExperience({ data, onRemove, onAdd, onChange }) {
    return (
        <div>
            <FormSection title={'Work Experience'} icon={<Briefcase size={16} color="#009689" />}>
                {data.experiences.map((experience, index) => (
                    <Experience
                        key={experience.id}
                        index={index}
                        onRemove={onRemove}
                        onChange={onChange}
                        data={data}
                    />
                ))}
                <button className="addExperienceBtn" onClick={onAdd}><span className="addPlusSign">+</span>Add Experience</button>
            </FormSection>
        </div>
    )
}

export default WorkExperience