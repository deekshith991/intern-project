
import './css/loginPage.css';
import { useState } from 'react';
import { RegisterJOB } from '../services/Taskservices';

const AddJOB = () => {

    const [regData, setRegData] = useState({
        company: "",
        position: "",
        workType: "",
        workLocation: "",
        salary: "",
        contact: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRegData({ ...regData, [name]: value });
    }

    const handleRegister = () => {
        const formData = {
            company: regData.company,
            position: regData.position,
            workType: regData.workType,
            workLocation: regData.workLocation,
            salary: regData.salary,
            contact: regData.contact
        }

        // const result = RegisterJOB(formData);
        // console.log(result.data);



    }


    return (
        <div className='ISSUEJOB'>
            <div className="container">
                <h1>Register Now</h1>
                <div className="d-flex flex-row">
                    <div className="login-box">
                        <form onSubmit={handleRegister}>



                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" className="form-control" id="company" placeholder="Enter your first name" name="company" value={regData.company} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">position</label>
                                <input type="text" className="form-control" id="position" placeholder=" position" name="position" value={regData.lastName} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="workType">Choose Type :</label><br />
                                <select id="workType" name="workType" value={regData.workType} onChange={handleChange}>
                                    <option value='null' >select</option>
                                    <option value="internship" >internship</option>
                                    <option value="full-time" >full-time</option>
                                    <option value="part-time" >part-time</option>

                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="workLocation">Address</label>
                                <input type="text" className="form-control" id="workLocation" placeholder="workLocation" name="workLocation" value={regData.workLocation} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary ">salary </label>
                                <input type="number" className="form-control" id="salary" placeholder="Enter salary"
                                    name="salary" value={regData.salary} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">contact</label>
                                <input type="email" className="form-control" id="contact" placeholder="Enter your Email" name="contact" value={regData.contact} onChange={handleChange} />
                            </div>




                            <button type="submit" className="btn btn-success btn-block" id="issue-btn">ISSUE JOB</button>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AddJOB;