import { useRef, useState } from 'react'
import PersonalInfoSection from './components/PersonalInfoSection.jsx'
import ProSummerySection from './components/ProSummerySection.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import './styles/Form.css'
import './styles/CVPreview.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Download } from 'lucide-react'

function App() {
  const [cvData, setData] = useState({
    pfpUrl: '',
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    portfolio: '',
    summery: '',
    experiences: [{
      id: 1,
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    skills: []
  })

  function handleChange(field, value) {
    setData({ ...cvData, [field]: value })
  }

  function handleAddSkill(skill) {
    setData({ ...cvData, skills: [...cvData.skills, { skill, id: Date.now() }] })
  }

  function handleRemoveSkill(index) {
    setData({
      ...cvData, skills: cvData.skills.filter((_, i) => i !== index)
    })
  }

  function handleChangeExperience(index, field, value) {
    const updatedExperiences = cvData.experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value }
      }
      return exp
    })
    setData({ ...cvData, experiences: updatedExperiences })
  }

  function handleAddExperience() {
    setData({ ...cvData, experiences: [...cvData.experiences, { id: Date.now(), jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: '' }] })
  }

  function handleRemoveExperience(index) {
    setData({ ...cvData, experiences: cvData.experiences.filter((_, i) => i !== index) })
  }

  function handlePfpImport(value) {
    setData({ ...cvData, pfpUrl: value })
    console.log(value)
  }

  async function handleDownloadPDF(params) {
    const preview = document.getElementById('previewContainer')
    const canvas = await html2canvas(preview)
    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')  // portrait, millimeters, A4 size
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('your-cv.pdf')
  }

  return (
    <>
      <div className='container'>
        <div className='CVForm'>
          <PersonalInfoSection data={cvData} onChange={handleChange} onImport={handlePfpImport}></PersonalInfoSection>
          <ProSummerySection data={cvData} onChange={handleChange}></ProSummerySection>
          <WorkExperience data={cvData} onChange={handleChangeExperience} onRemove={handleRemoveExperience} onAdd={handleAddExperience}></WorkExperience>
          <SkillsSection data={cvData} onAdd={handleAddSkill} onRemove={handleRemoveSkill}></SkillsSection>
        </div>
        <div className='CVLivePreview'>
          <label>CV Preview</label>
          <div className='previewContainer' id='previewContainer'>
            <div className='leftSide'>
              {cvData.pfpUrl
                && <img src={cvData.pfpUrl} alt="Profile" className="pfpDiv" />
              }
              <label className="contactHeader">CONTACT INFO</label>
              <ul>
                {cvData.email !== '' && (
                  <li>{cvData.email}</li>
                )}
                {cvData.phone !== '' && (
                  <li>{cvData.phone}</li>
                )}
                {cvData.location !== '' && (
                  <li>{cvData.location}</li>
                )}
                {cvData.portfolio !== '' && (
                  <li>{cvData.portfolio}</li>
                )}
              </ul>
              <label className="contactHeader">SKILLS</label>
              <ul>
                {cvData.skills.map((skill, index) => (
                  <li key={skill.id}>{skill.skill.toUpperCase()}</li>
                ))}
              </ul>
            </div>
            <div className="rightSide">
              <h1 className='nameHeader'>{cvData.name.toUpperCase()}</h1>
              {cvData.title !== '' && (
                <label className='jobHeader'>{cvData.title.toUpperCase()}</label>
              )}
              <p className='proSummaryText'>{cvData.summery}</p>
              <div className='experiencesSection'>
                {cvData.experiences[0].jobTitle !== '' && (
                  <h2 className='subHeader'>EXPERIENCES</h2>
                )}
                <div>
                  {cvData.experiences.map((exp, index) => (
                    <>
                      {exp.jobTitle !== '' && (
                        <div className='experienceWrapper'>
                          <label>
                            {exp.startDate ? new Date(exp.startDate).getFullYear() : '...'} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
                          </label>
                          <label className='jobTitle'>{exp.jobTitle.toUpperCase()} - {exp.company.toUpperCase()}</label>
                          <label>📍 {exp.location}</label>
                          <p>{exp.description}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div>
          <Download className='inputIcon' size={16} color='white' />
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      </div>
    </>
  )
}

export default App
