import { connect } from 'react-redux';
import Boxes from '../components/Boxes';


const mapStateToProps = (state) => {
    return {
        boxes: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBoxClick: (id) => {
            console.log(`box of id ${id} clicked on`);
        }
    }
}

const VisibleBoxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Boxes);


export default VisibleBoxes;