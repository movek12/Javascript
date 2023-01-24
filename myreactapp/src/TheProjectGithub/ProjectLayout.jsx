
import ProjectHeader from './Header/ProjectHeader'
import ProjectFooter from './ProjectFooter.jsx/ProjectFooter'

function ProjectLayout({children}) {
  return (
    <>
    <ProjectHeader/>
    {children}
    <hr sx={{ mt: 3 }}/>
    <br /><br />
    <ProjectFooter/>
    </>
  )
}

export default ProjectLayout