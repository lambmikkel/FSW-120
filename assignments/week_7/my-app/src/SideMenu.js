import React from 'react';

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        newTweet: ""
      }
    }

    onFormPost =(event)=>{
        event.preventDefault();

        let form = document.getElementById("inputForm");

        let newTweet = form.tweetContent.value;
        this.setState({newTweet: newTweet});

        this.props.onAddNewTweet(this.state.newTweet);

        form.tweetContent.value = "";
    }


    render() {
        return(
            <div id="sideMenu">
            <ul>
                <li>
                    <img id="avatar" src="https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=1400&h=950" alt="avatar" />
                </li>
                <li id="username">LambwareTech804</li>
                <li>Edit Profile</li>
                <li>Friends</li>
                <li>Following</li>
                <br/>
                <form id="inputForm" onSubmit={this.onFormPost}>
                    <textarea id="tweetContent" name="tweetContent" placeholder="Tweet Something..." onChange={(event) => this.setState({newTweet: event.target.value})} />
                    <button id="submitButton" onClick={this.onFormPost}>Submit</button>
                </form>
            </ul>
            </div>
        )
    }
}

export default SideMenu;