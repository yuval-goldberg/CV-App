import { useState, useRef } from "react"
import FormInput from './FormInput.jsx'
import FormSection from './FormSection.jsx'
import { MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Smartphone } from 'lucide-react'
import { Link } from 'lucide-react'
import { User } from 'lucide-react'
import { Camera } from 'lucide-react'

function PersonalInfoSection({ data, onChange, onImport }) {
    const fileInputRef = useRef(null)

    return (
        <FormSection title={'Personal Information'} icon={<User size={16} color="#009689" />}>
            <div className="basicInfo">
                <div className="personalInfoIcon" onClick={() => fileInputRef.current.click()}>
                    <Camera size={32}></Camera>
                </div>
                <div className="row">
                    <FormInput label={'FULL NAME'} placeholder={'Jordan Ellis'} value={data.name} onChange={(e) => onChange('name', e.target.value)}></FormInput>
                    <FormInput label={'JOB TITLE / HEADLINE'} placeholder={'Senior Product Designer'} value={data.title} onChange={(e) => onChange('title', e.target.value)} ></FormInput>
                </div>
            </div>
            <div className="moreInfo">
                <FormInput label={'EMAIL'} placeholder={'jordan.ellis@email.com'} type='extraInfoInput' icon={<Mail size={16} />} value={data.email} onChange={(e) => onChange('email', e.target.value)}></FormInput>
                <FormInput label={'PHONE'} placeholder={'+1 (415) 555-0192'} type='extraInfoInput' icon={<Smartphone size={16} />} value={data.phone} onChange={(e) => onChange('phone', e.target.value)}></FormInput>
                <FormInput label={'LOCATION'} placeholder={'San Francisco, CA'} type='extraInfoInput' icon={<MapPin size={16} />} value={data.location} onChange={(e) => onChange('location', e.target.value)}></FormInput>
            </div>
            <div className="portfolioInfo">
                <FormInput label={'LINKEDIN / PORTFOLIO URL'} placeholder={'linkedin.com/in/jordanellis'} height="200px" type='extraInfoInput' icon={<Link size={16} />} value={data.portfolio} onChange={(e) => onChange('portfolio', e.target.value)}></FormInput>
            </div>
            <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} filename={data.pfpUrl} onChange={(e) => onImport(URL.createObjectURL(e.target.files[0]))} />
        </FormSection >
    )
}

export default PersonalInfoSection