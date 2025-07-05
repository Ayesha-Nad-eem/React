export default function Student({
    // name = "Guest",
    // age = 0,
    // course = "Not Specified",
    // isStudent = false,
}) {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    const listitems = fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ));
    return (
        // <div>
        //     <div className="container">
        //         <p>Name : {name}</p>
        //         <p>Age : {age}</p>
        //         <p>Course : {course}</p>
        //         <p>Student : {isStudent ? "Yes" : "No"}</p>
        //     </div>
        // </div>
        
        <ul>{listitems}</ul>

    );
}
