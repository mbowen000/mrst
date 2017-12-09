import Robots from '../components/Robots';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        robots: state.robots
    }
}

const RobotsList = connect(
    mapStateToProps
)(Robots)

export default RobotsList