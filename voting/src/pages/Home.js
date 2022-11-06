const Home=()=>{
    function check(){
        if(parseInt(document.form1.age.value)>=18&&document.form1.name1.value!==""){
            alert("you are eligible to vote")
        }else if(document.form1.name1.value===""){
            alert("Plese Enter your Name")
        }else{
            alert("you are not eligible to vote")
        }
    }

    return(
        <div className="home">
            <form name="form1">
                <label>Enter Name: </label>
                <input type="text" name="name1" required="true" />
                <label>Enter Age: </label>
                <input type="text" name="age"/>
                <button onClick={check}>Click Here</button>
            </form>
        </div>
    );
}
export default Home;