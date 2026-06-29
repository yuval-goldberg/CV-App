import { useState, useEffect } from "react"
import FormInput from './FormInput.jsx'
import FormSection from './FormSection.jsx'
import { FileText } from 'lucide-react'

function ProSummerySection({ data, onChange }) {
    const [textLength, setTextLength] = useState(0)

    return (
        <FormSection title={'Proffesional Summary'} icon={<FileText size={16} color="#009689" />}>
            <div className="proSummaryWrapper">
                <textarea className="proSummaryTextbox" onChange={(e) => {
                    setTextLength(e.target.textLength)
                    onChange('summery', e.target.value)
                }
                }></textarea>
            </div>
            <label className="lengthLabel">{textLength} characters</label>
        </FormSection>
    )
}

export default ProSummerySection