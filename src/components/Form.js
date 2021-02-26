import React from 'react';
import './Form.scss';
import calculator from '../logic/calculator';
import roundNumber from '../logic/roundNumber';
import effectAddition from '../logic/effectAddition';

import reactions from '../data/reactions.json';
import effects from '../data/effects.json';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: 'Pyro',
            reaction: 'Overloaded',
            charlvl: 0,
            emas: 0,
            effect: 'crimson',
            result: 0,
            isChecked: false,
        }
    }

    Calculation = () => {
        var em = parseFloat(this.state.emas);
        var lvl = parseFloat(this.state.charlvl);
        var react = this.state.reaction;

        var result = calculator(lvl, em, react);
        
        if (this.state.reaction === 'Melt') {
            if (this.state.element === 'Pyro') {
                result *= 2;
            } else if (this.state.element === 'Cryo') {
                result *= 1.5;
            }
        } else if (this.state.reaction === 'Vaporize') {
            if (this.state.element === 'Hydro') {
                result *= 2;
            } else if (this.state.element === 'Pyro') {
                result *= 1.5;
            }
        }

        if (this.state.isChecked) {
            console.log(this.state.effect, this.state.reaction);
            result = effectAddition(this.state.effect, this.state.reaction, result);
        }

        console.log(result);
        this.setState({ result: roundNumber(result, 2) });
    }

    handleChecked = (event) => {
        const check = event.target.checked;
        this.setState({isChecked: check});
    }

    render() {
        let triggerOptionInput;
        if (this.state.reaction === 'Melt') {
            triggerOptionInput = (
                <div className='input-warp'>
                    <label>Triggered By</label>
                    <select
                    value={this.state.element}
                    onChange={(event) => this.setState({element: event.target.value})}>
                        <option value='Pyro'>Pyro</option>
                        <option value='Cryo'>Cryo</option>
                    </select>
                </div>
            );
        } else if (this.state.reaction === 'Vaporize') {
            triggerOptionInput = (
                <div className='input-warp'>
                    <label>Triggered By</label>
                    <select
                    value={this.state.element}
                    onChange={(event) => this.setState({element: event.target.value})}>
                        <option value='Pyro'>Pyro</option>
                        <option value='Hydro'>Hydro</option>
                    </select>
                </div>
            );
        }

        let artifactSelection;
        if (this.state.isChecked) {
            artifactSelection = (
                <div className='input-warp'>
                    <label>Artifact Set</label>
                    <select
                        className='input-dropdown'
                        value={this.state.effect}
                        onChange={(event) => {this.setState({effect: event.target.value})}}
                    >
                        {effects.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            );
        }

        let resultText;
        if (isNaN(this.state.result)) {
            resultText = (
                <span className='result'>Reaction is not match with Artifact Effect</span>
            );
        } else if (this.state.reaction === 'Vaporize' || this.state.reaction === 'Melt') {
            resultText = (
                <span className='result'>
                    { this.state.reaction }&nbsp;:&nbsp;
                    { this.state.result }&nbsp;x
                </span>
            );
        } else if (this.state.result == 0) {
            resultText = (
                <span className='result'></span>
            );
        } else {
            resultText = (
                <span className='result'>
                    { this.state.reaction }&nbsp;:&nbsp;
                    { this.state.result }
                </span>
            );
        }

        return(
            <div className='container flex-init-setup flex-ppal-setup'>
                <div className='input-warp'>
                    <label>Elemental Reaction</label>
                    <select 
                        className='input-dropdown'
                        value={this.state.reaction} 
                        onChange={(event) => this.setState({reaction: event.target.value, result: 0})}
                    >
                        {reactions.map((option) => (
                            <option value={ option.value }>{ option.label }</option>
                        ))}
                    </select>
                </div>
                {/* Hide and show */}
                { triggerOptionInput }
                <div
                    className='input-warp'
                    value={this.state.charlvl}
                    onChange={(event) => {this.setState({charlvl: event.target.value})}}>
                    <label>Character Level</label>
                    <input type="text" inputMode="numeric" defaultValue="0"/>
                </div>
                <div
                    className='input-warp'
                    value={this.state.emas}
                    onChange={(event) => {this.setState({emas: event.target.value})}}>
                    <label>Elemental Mastery</label>
                    <input type="text" inputMode="numeric" defaultValue="0"/>
                </div>
                <div className='input-warp'>
                    <label>Artifact Effect</label>
                    <input
                        className='input-checkbox'
                        type='checkbox'
                        defaultChecked={false}
                        onChange={(event)=>{this.handleChecked(event)}} 
                    />
                </div>
                
                { artifactSelection }

                <button
                    onClick={this.Calculation}>
                    Calculate
                </button>

                <div className='result-wrapper'>
                    { resultText }
                </div>
            </div>
        );
    }
}

export default Form;