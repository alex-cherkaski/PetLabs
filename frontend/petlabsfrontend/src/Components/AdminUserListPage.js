import React from 'react';
import '../CSS/ListView.css';
import AdminSideMenu from './AdminSideMenu';
import Lists from '../TempClasses/List';
import { Link } from 'react-router-dom';

class AdminUserListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: Lists.userList,
            textFieldValue: ''
        };
        this.handleTextboxChange = this.handleTextboxChange.bind(this);
    }

    handleTextboxChange(event) {
        this.setState({ textFieldValue: event.target.value });
    }

    getTableRows() {
        const rowList = [];

        rowList.push(
            <tr key={this.state.users.length}>
                <th className={'list-view'}>Usernames</th>
            </tr>
        );

        for (let i = 0; i < this.state.users.length; i++) {
            if (!this.state.users[i].isAdmin && this.state.users[i].username.includes(this.state.textFieldValue)) {
                rowList.push(
                    <tr key={i}>
                        <td className={'list-view'}>{this.state.users[i].username}</td>
                    </tr>
                );
            }

        }
        return rowList;
    }

    render() {
        return(
            <div>
                <AdminSideMenu />
                <div className={'list-view'}>
                    <h1>Users</h1>
                    <div id={'inner-container'} className={'list-view'}>
                        <input className={'list-view'} type={'text'} onChange={this.handleTextboxChange} value={this.state.textFieldValue}></input>
                        <Link to={{
                            pathname: './AdminUserPage',
                            username: this.state.textFieldValue
                        }}>
                            <button className={'list-view'}>Go!</button>
                        </Link>
                        <br /> <br />
                        <table className={'list-view'}>
                            <tbody>
                                {this.getTableRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUserListPage;