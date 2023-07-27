import React from "react";

class Question extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            curruntQuestion: null,
        }
    }
    async componentDidMount(){
        try {
            const res = await fetch(`https://opentdb.com/api.php?amount=${this.props.selectCat}&category=9&difficulty=medium`);
            const data =await res.json();
            console.log(data.results)

            this.setState({curruntQuestion:data.results})
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        console.log(this.props.selectCat)
        console.log(this.state.curruntQuestion)
        return<>
        
            
        
        
        
                </>
    }
}

export default Question;