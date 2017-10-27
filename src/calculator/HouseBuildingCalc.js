/**
 * House Building Calculator
 *
 * Created by Alex Elkin on 23.10.2017.
 */

import calculateFoundationCost from './foundationCalc'

import React from 'react';
import PropTypes from 'prop-types'
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const heaters = {
    none : "Без утеплителя",
    mineralWool : "Минеральная вата",
    stoneWool : "Каменная вата"
};

const roofCoatings = {
    none : "Без покрытия",
    corrugatedBoard : "Профнастил",
    metalTile : "Металлочерепица"
};

class HouseBuildingCalc extends React.Component {

    constructor(props) {
        super(props);
        this.onAreaChanged = this.onAreaChanged.bind(this);
        this.onFloorsCountChanged = this.onFloorsCountChanged.bind(this);
        this.onInsulationChanged = this.onInsulationChanged.bind(this);
        this.onMakeFoundationToggle = this.onMakeFoundationToggle.bind(this);
        this.onMakeCarcassToggle = this.onMakeCarcassToggle.bind(this);
        this.onRoofCoatingChanged = this.onRoofCoatingChanged.bind(this);
        this.state = {
            floorsCount: 1,
            houseArea: 36,
            makeFoundation: true,
            makeCarcass: true,
            heater : "mineralWool",
            roofCoating : "corrugatedBoard"
        }
    }

    onAreaChanged(value) {
        this.setState({houseArea:value})
    }

    onFloorsCountChanged(event, index, value) {
        this.setState({floorsCount:value})
    }

    onMakeFoundationToggle(event, value) {
        this.setState({makeFoundation:value})
    }

    onMakeCarcassToggle(event, value) {
        this.setState({makeCarcass:value});
        if (!value) this.setState({heater:'none'})
    }

    onInsulationChanged(event, index, value) {
        this.setState({heater:value})
    }

    onRoofCoatingChanged(event, index, value) {
        this.setState({roofCoating:value})
    }

    render() {
        return (
            <div className="HouseBuildingCalc">
                <Card style={{backgroundColor:"rgba(255,255,255,0.3)"}}>
                    <CardTitle title="Рассчет стоимости строительства каркасного дома"/>
                    <CardText>
                        <TextField floatingLabelText="Жилая площадь"
                                   hintText="Общая площадь дома"
                                   value={this.state.houseArea}
                                   onChange={(e) => this.onAreaChanged(e.target.value)}
                                   style={{width:'100%'}}
                                   type={"number"}
                        />
                        <Slider name="Площадь"
                                value={this.state.houseArea}
                                min={10}
                                max={200}
                                step={1}
                                onChange={(ignored, value) => this.onAreaChanged(value)}
                        />
                        <SelectField floatingLabelText="Количество этажей"
                                     value={this.state.floorsCount}
                                     onChange={this.onFloorsCountChanged}
                                     style={{width:'100%'}}
                        >
                            <MenuItem value={1} primaryText="1 этаж"/>
                            <MenuItem value={2} primaryText="2 этажа"/>
                        </SelectField>
                        <Toggle
                            label="Залить фундамент"
                            toggled={this.state.makeFoundation}
                            onToggle={this.onMakeFoundationToggle}
                        />
                        <Toggle
                            label="Построить каркас"
                            toggled={this.state.makeCarcass}
                            onToggle={this.onMakeCarcassToggle}
                        />
                        <SelectField floatingLabelText="Утеплитель"
                                     style={{width:'100%'}}
                                     value={this.state.heater}
                                     onChange={this.onInsulationChanged}
                        >
                            {
                                heaters && Object.keys(heaters).map(k => <MenuItem key={k} value={k} primaryText={heaters[k]}/>)
                            }
                        </SelectField>
                        <SelectField floatingLabelText="Покрытие кровли"
                                     value={this.state.roofCoating}
                                     style={{width:'100%'}}
                                     onChange={this.onRoofCoatingChanged}
                        >
                            {
                                roofCoatings && Object.keys(roofCoatings).map(k => <MenuItem key={k} value={k} primaryText={roofCoatings[k]}/>)
                            }
                        </SelectField>
                        <br/>
                        <div>
                            <label>Стоимость фундамента: {calculateFoundationCost(this.state.houseArea, this.state.floorsCount)}</label>
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default HouseBuildingCalc;