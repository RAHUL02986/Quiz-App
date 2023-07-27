import React from "react";
import Category from "./Categories";
import Header from "./Header";
import Question from "./Question";
import Quize from "./Quize";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            selectCat:null,
            currentque:null,
        }
    }

    async componentDidMount(){
        try {
            const res = await fetch('https://opentdb.com/api_category.php');
            const data =await res.json();
            this.setState({data:data.trivia_categories.splice(0, 10)})
        } catch (error) {
            console.log(error)
        }

    }
    
    selectCatFun=(event,cat)=>{
        this.setState({
            selectCat:cat
                })
    }
    handleChange = (event, que)=>{
        this.setState({
            currentque: que
        })
    }
    render(){
        // console.log(this.state.questions)
        console.log(this.state.selectCat)
        return<>
        <Header/>
        <Category data={this.state.data} selectCatFun={this.selectCatFun} />
        <Question selectCat={this.state.selectCat}/>
        <Quize selectCat={this.state.selectCat} />
        </>
    }
}
export default App;