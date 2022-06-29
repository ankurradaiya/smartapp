import './dashboard.scss'
import { Profilenav } from '../../components/Topnavbar/Profilenav';
import { Sidenav } from '../../components/Sidenav/Sidenav';
import { Tabs, Tab, Row, Container } from 'react-bootstrap';
import { Profile} from '../../components/Profile';
import { Myplan } from '../../components/Myplan';
import { Billing } from '../../components/Billing';


const Dashboard = () => {
  return (
    <>
      <Profilenav />
      <Sidenav />
      <Container>
        <Row>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-5">
            <Tab eventKey="profile" title="Profile">
              <Profile />
            </Tab>
            <Tab eventKey="myplan" title="My Plan">
              <Myplan />
            </Tab>
            <Tab eventKey="billing" title="Billing">
              <Billing />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard