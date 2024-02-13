import Employeedob from "./employeedate";
import './employee.css';
function employee(props) {
    return(
        <div>
            
            <div class="name">{props.emp_name}</div>
                          
           <div class="date"><Employeedob DOB = {props.DOB}/></div>
            <div>
                <div class="exp">{props.exp}</div>
            </div>
        </div>
    )
}

export default employee;