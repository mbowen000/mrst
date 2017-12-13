import Robots from '../components/Robots';
import Admin from '../components/Admin';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        robots: state.robots
    }
}

// this is the regular 'read only' robots list
const RobotsList = connect(
    mapStateToProps
)(Robots)

// we will just wrap a different presentation component to create the admin
export const RobotsListAdmin = connect(
    mapStateToProps
)(Admin);

export default RobotsList