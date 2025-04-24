// /src/components/CameraList.js
import React, { Component } from 'react';
import { getData } from './data';

export default class CameraList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cameras: []
        };
    }
    componentDidMount() {
        const data = getData();
        this.setState({ cameras: data });
    }
    render() {
        return (
            <div>
                <h2>Danh sách máy ảnh</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {this.state.cameras.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                            <h4>{item.name}</h4>
                            <p>Loại: {item.loai}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}