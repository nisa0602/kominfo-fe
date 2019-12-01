import React, {Component} from 'react';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';

import Gaslist from './gasList';



class Gastype extends Component {
    state = {
        gasses:[
        ]
    }

    componentDidMount() {
        axios.get('http://localhost:5050/gas')
        .then(response => response.json())
        .then (data => {
            this.setState({
                gasses: data
            })
            console.log(this.state.gasses)
        })
    }
    
    render() {
        return(
            <div className="container" style={{marginTop: '80px'}}>
                <div>
                    <h5>Bahan bakar yang tersedia</h5>
                    <p>Update terakhir: Desember 2019</p>
                    <hr className="grey" style={{
                        height: 2
                    }}/>
                    <table style={{maxWidth: '500px'}}>
                        <Gaslist gasses = {this.state.gasses} />
                    </table>
                </div>

                <div style={{marginTop: "20px"}}>
                    <p>Fasilitas</p>
                    <i className="material-icons">local_atm local_parking wc
                     </i>
                </div>
               
            </div>
        )
    }
}

export default Gastype;