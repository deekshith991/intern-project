import { getJOBS } from "../services/Taskservices"


// const Jobs = () => {



//     return (
//         <div>
//             <h1> Jobs list</h1>
//             {jobsdata.map(job) = {
//             }}
//         </div>
//     )
// };


export default function JobCard() {
    const jobs = getJOBS();
    alert(JSON.stringify(jobs.data));
    return (
        <div>
            <h1> jobs</h1>
        </div>
    );
}
