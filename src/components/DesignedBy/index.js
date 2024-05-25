import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

import {FiExternalLink} from 'react-icons/fi'
import Header from '../Header'
import './index.css'

const DesignedBy = () => (
  <>
    <Header />
    <div className="my-container-dark">
      <div className="border-con-dark">
        <h1 className="my-heading-dark">About me</h1>
        <div className="name-con-dark">
          <p className="text-dark">Name:Sowmya Sri Kancharla</p>
        </div>
        <div>
          <p className="text-dark">
            LinkedIn <FaLinkedin className="dark" /> :{' '}
            <a
              className="link-dark"
              href="https://www.linkedin.com/in/sowmya-sri-kancharla-47569a299/"
            >
              www.linkedin.com
              <FiExternalLink className="visit-icons-dark" />
            </a>
          </p>
        </div>
        <div>
          <p className="text-dark">
            Github <FaGithubSquare className="dark" /> :{' '}
            <a
              className="link-dark"
              href="https://github.com/sowmyasrikancharla/"
            >
              www.Github.com
              <FiExternalLink className="visit-icons-dark" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default DesignedBy
