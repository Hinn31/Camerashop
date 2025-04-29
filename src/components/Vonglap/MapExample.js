import React, { Component } from 'react';
import { getData } from '../Content/data';

class MapExample extends Component {
    render() {
        const cameras = getData();

        return (
            <div>
                <h3>Dùng map(): Hiển thị sản phẩm</h3>
                <ul>
                    {cameras.map((cam, index) => (
                        <li key={index}>
                            <img src={cam.image} alt={cam.name} width="100" />
                            <p>{cam.name} - {cam.loai}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MapExample;
