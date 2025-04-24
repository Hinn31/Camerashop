import React from 'react';

export class State_one extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: {
                name: 'Nguyễn Hữu Quang ',
                email: 'QuangVien2205@gmail.com'
            }
        };
    }

    componentDidMount() {
        // gửi data lên App khi component mount
        this.props.onSendData(this.state.lists);
    }

    render() {
        const { name, email } = this.state.lists;

        return (
            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}