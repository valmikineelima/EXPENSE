function Employeedob(props) {
    const month = props.DOB.toLocaleString('en-US', {month:'long'});
    const day = props.DOB.toLocaleString('en-US',{day:'2-digit'});
    const year = props.DOB.getFullYear();

    return(

        <div>
            <div>
                    <div>{month}</div>
                    <div>{year}</div>
                    <div>{day}</div>
            </div>
        </div>
    );
}
export default Employeedob;
