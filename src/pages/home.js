import React from 'react';
import Table from "../components/parent/Table";
import Form from "../components/parent/Form";
import Testplay from "../components/Testplay"


export default class Home extends React.Component {
    state = {
        characters: [],
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    };

    render() {
        const { characters } = this.state;

        return (
            <div>
                <a href='#/detail'>去detail</a>
                <div className="container">
                    <Table characterData={characters} removeCharacter={this.removeCharacter} />
                    <h3>Add New</h3>
                    <Form handleSubmit={this.handleSubmit} />
                    <Testplay/>
                </div>
            </div>
        )
    }
}