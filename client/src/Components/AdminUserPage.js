import React from 'react';
import AdminSideMenu from '../Components/AdminSideMenu';
import { Link } from 'react-router-dom';
import saveIcon from '../Images/Save_Icon.png';
import { Redirect } from 'react-router';

import '../CSS/ItemView.css';

//statezero
import BaseReactComponent from "./../BaseReactComponent";
import {setLastPage} from "../actions/userhelpers"

class AdminUserPage extends BaseReactComponent {
    // Get user Id from AdminUserList
    targetUserId = this.props.location.userId;
    targetUser;
    petChanges = [];
    itemChanges = [];

    state = {
        targetUserName: "",
        password: "",
        isAdmin: false,
        gold: 0,
        pList: [],
        iList: []
    };

    filterState({currUser}) {
        return {currUser};
    }

    componentDidMount() {
        setLastPage("/AdminUserPage");
        if (!this.targetUserId) {
            fetch('/cookie/userId')
                .then(res => {
                    if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => {
                if (json && json.userId) {
                    console.log(json.userId);
                    this.findUserInfo('/users/' + json.userId);
                    this.getPetInfo("/pets/");
                    this.getItemInfo("/items/");
                }
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            this.findUserInfo('/users/' + this.targetUserId);
            this.getPetInfo("/pets/");
            this.getItemInfo("/items/");
        }
    }

    findUserInfo(url) {
        // const url = "http://localhost:3001/users/" + this.targetUserId;
        // const url = "/users/" + this.targetUserId;
        const request = new Request(url, {
            method: "get",
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((user) => {
            this.targetUser = user;
            this.setState({
                targetUserName: user.username,
                password: user.password,
                isAdmin: user.isAdmin,
                gold: user.gold
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    getPetInfo(url) {
        // const url = "http://localhost:3001/pets/";
        // const url = "/pets/";
        const request = new Request(url, {
            method: "get",
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((pets) => {
            this.setState({
                pList: pets
            })
            this.populatePets();
        }).catch((error) => {
            console.log(error);
        })
    }

    populatePets() {
        let pEntries = document.querySelector("#petEntries");
        pEntries.innerHTML = "";
        let pidList = this.targetUser.petIdList;
        for (let i = 0; i < pidList.length; i++) {
            // Create new div element:
            let nDiv = document.createElement('div');

            // Put pet's id:
            let pId = document.createTextNode("Pet id: " + pidList[i] + '   ')
            nDiv.appendChild(pId);

            // Put remove button:
            let rButton = document.createElement('button');
            rButton.setAttribute("value", pidList[i]);
            rButton.setAttribute("ind", i);
            rButton.addEventListener('click', this.markForRemovalP);

            let bText = document.createTextNode('REMOVE');
            rButton.appendChild(bText);
            nDiv.appendChild(rButton);

            // Create a table:
            let nTable = document.createElement('table');
            let tbodyPart = document.createElement('tbody');
            nTable.setAttribute('class', 'item-view');
            
            // Start populating:
            let j = 0;
            while (j < this.state.pList.length) {
                if (this.state.pList[j]._id === pidList[i]) {
                    let innerArray = [];
                    innerArray.push(this.state.pList[j]._id);

                    // Add Pet Name entry:
                    let pNameReturn = this.AddTR("Pet Name", this.state.pList[j].petName, 
                                                this.handlePetNameChange, pidList[i]);
                    tbodyPart.appendChild(pNameReturn);
                    innerArray.push(this.state.pList[j].petName);
                    
                    // Add Pet Hunger entry:
                    let pHungerReturn = this.AddTR("Pet Hunger", this.state.pList[j].fullness, 
                                                this.handlePetHungerChange, pidList[i]);
                    tbodyPart.appendChild(pHungerReturn);
                    innerArray.push(this.state.pList[j].fullness);

                    // Add Pet Happniess entry:
                    let pHappinessReturn = this.AddTR("Pet Happniess", this.state.pList[j].happiness, 
                                                this.handlePetHappinessChange, pidList[i]);
                    tbodyPart.appendChild(pHappinessReturn);
                    innerArray.push(this.state.pList[j].happiness);

                    // Add Pet Intelligence entry:
                    let pIntelligenceReturn = this.AddTR("Pet Intelligence", this.state.pList[j].intelligence,
                                                this.handlePetIntelligenceChange, pidList[i]);
                    tbodyPart.appendChild(pIntelligenceReturn);
                    innerArray.push(this.state.pList[j].intelligence);

                    // Add Pet Strength entry:
                    let pStrengthReturn = this.AddTR("Pet Strength", this.state.pList[j].strength, 
                                                this.handlePetStrengthChange, pidList[i]);
                    tbodyPart.appendChild(pStrengthReturn);
                    innerArray.push(this.state.pList[j].strength);

                    // Add Pet Speed entry:
                    let pSpeedReturn = this.AddTR("Pet Speed", this.state.pList[j].speed, 
                                                this.handlePetSpeedChange, pidList[i]);
                    tbodyPart.appendChild(pSpeedReturn);
                    innerArray.push(this.state.pList[j].speed);

                    innerArray.push("keep");
                    
                    this.petChanges.push(innerArray);
                    j += this.state.pList.length;
                }
                j++;
            }
            nTable.appendChild(tbodyPart);
            nDiv.appendChild(nTable);
            nDiv.appendChild(document.createElement('br'));
            pEntries.appendChild(nDiv);
        }
    }

    getItemInfo(url) {
        // const url = "http://localhost:3001/items/";
        // const url = "/items/";
        const request = new Request(url, {
            method: "get",
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((items) => {
            this.setState({
                iList: items
            })
            this.populateItems();
        }).catch((error) => {
            console.log(error);
        })
    }

    populateItems() {
        let iEntries = document.querySelector("#itemEntries");
        iEntries.innerHTML = "";
        let iidList = this.targetUser.itemIdList;
        for (let i = 0; i < iidList.length; i++) {
            // Create new div element:
            let nDiv = document.createElement('div');

            // Put item's id:
            let iId = document.createTextNode("Item id: " + iidList[i])
            nDiv.appendChild(iId);

            // Put remove button:
            let rButton = document.createElement('button');
            rButton.setAttribute("value", iidList[i]);
            rButton.setAttribute("ind", i);
            rButton.addEventListener('click', this.markForRemovalI);

            let bText = document.createTextNode('REMOVE');
            rButton.appendChild(bText);
            nDiv.appendChild(rButton);

            // Create a table:
            let nTable = document.createElement('table');
            let tbodyPart = document.createElement('tbody');
            nTable.setAttribute('class', 'item-view');
            
            // Start populating:
            let j = 0;
            while (j < this.state.iList.length) {
                if (this.state.iList[j]._id === iidList[i]) {
                    let innerArray = [];
                    innerArray.push(this.state.iList[j]._id);

                    // Add Name entry:
                    let pNameReturn = this.AddTR("Item Name", this.state.iList[j].name, 
                                            this.handleItemNameChange, iidList[i]);
                    tbodyPart.appendChild(pNameReturn);
                    
                    // Add Hunger entry:
                    let pHungerReturn = this.AddTR("Item Hunger", this.state.iList[j].fullness, 
                                                this.handleItemHungerChange, iidList[i]);
                    tbodyPart.appendChild(pHungerReturn);

                    // Add Happniess entry:
                    let pHappinessReturn = this.AddTR("Item Happniess", this.state.iList[j].happiness, 
                                                    this.handleItemHappinessChange, iidList[i]);
                    tbodyPart.appendChild(pHappinessReturn);

                    // Add Intelligence entry:
                    let pIntelligenceReturn = this.AddTR("Item Intelligence", this.state.iList[j].intelligence, 
                                                    this.handleItemIntelligenceChange, iidList[i]);
                    tbodyPart.appendChild(pIntelligenceReturn);

                    // Add Strength entry:
                    let pStrengthReturn = this.AddTR("Item Strength", this.state.iList[j].strength, 
                                                this.handleItemStrengthChange, iidList[i]);
                    tbodyPart.appendChild(pStrengthReturn);

                    // Add Speed entry:
                    let pSpeedReturn = this.AddTR("Item Speed", this.state.iList[j].speed, 
                                                this.handleItemSpeedChange, iidList[i]);
                    tbodyPart.appendChild(pSpeedReturn);

                    // Add Gold entry:
                    let pGoldReturn = this.AddTR("Item Cost", this.state.iList[j].price, 
                                            this.handleItemGoldChange, iidList[i]);
                    tbodyPart.appendChild(pGoldReturn);
                    
                    innerArray.push("keep");
                    
                    this.itemChanges.push(innerArray);
                    j += this.state.iList.length;
                }
                j++;
            }
            nTable.appendChild(tbodyPart);
            nDiv.appendChild(nTable);
            nDiv.appendChild(document.createElement('br'));
            iEntries.appendChild(nDiv);
        }
    }

    AddTR(atrName, atrValue, handler, itemId) {
        // Create new tr:
        let trEntry = document.createElement('tr');
        trEntry.setAttribute('class', 'item-view');

        // Create td for attribute name:
        let atrN = document.createElement('td');
        atrN.setAttribute('class', 'item-view');

        let atrTxt = document.createTextNode(atrName)
        atrN.appendChild(atrTxt);
        trEntry.appendChild(atrN);

        // Create td for the field:
        let nInput = document.createElement('input');
        nInput.setAttribute('class', 'addItemLink');
        nInput.setAttribute('type', 'Text');
        nInput.setAttribute('value', atrValue);
        nInput.setAttribute('itemId', itemId)
        nInput.onchange = handler;

        trEntry.appendChild(nInput);
        return trEntry;
    }

    /* Event Handlers */

    handleSaveClick = () => {
        let userPetIdList = this.targetUser.petIdList;
        let userItemIdList = this.targetUser.itemIdList;
        this.targetUser.password = this.state.password;
        this.targetUser.gold = this.state.gold;

        // Changing pet information:
        let petToBeRemoved = [];
        for (let i = 0; i < this.petChanges.length; i++) {
            for (let j = 0; j < this.state.pList.length; j++) {
                if (this.petChanges[i][0] === this.state.pList[j]._id) {
                    if (this.petChanges[i][7] === "remove") {
                        petToBeRemoved.push(this.petChanges[i][0]);
                    } else if (this.petChanges[i][7] === "keep") {
                        let newPList = this.state.pList;
                        newPList[j].petName = this.petChanges[i][1];
                        newPList[j].fullness = this.petChanges[i][2];
                        newPList[j].happiness = this.petChanges[i][3];
                        newPList[j].intelligence = this.petChanges[i][4];
                        newPList[j].strength = this.petChanges[i][5];
                        newPList[j].speed = this.petChanges[i][6];
                        this.setState({
                            pList: newPList
                        })
                        this.petUpdate(this.petChanges[i][0], j);
                    }
                }
            }
        }

        // Actually remove pet:
        for (let i = 0; i < petToBeRemoved.length; i++) {
            this.petDelete(petToBeRemoved[i]);
            userPetIdList.splice(petToBeRemoved[i], 1);
        }

        // Changing item information:
        let itemToBeRemoved = [];
        for (let i = 0; i < this.itemChanges.length; i++) {
            // Find index of target item in itemIdList:
            for (let k = 0; k < userItemIdList.length; k++) {
                if (this.itemChanges[i][0] === userItemIdList[k] 
                        && this.itemChanges[i][1] === "remove") {
                    itemToBeRemoved.push(k);
                }
            }
        }

        // Actually remove item:
        for (let i = 0; i < itemToBeRemoved.length; i++) {
            // this.iList.splice(itemToBeRemoved[i][0], 1);
            userItemIdList.splice(itemToBeRemoved[i], 1);
        }
        this.userUpdate();
        this.populateItems();
        this.populatePets();

        alert("Changes Saved!");
    }

    petUpdate(pid, ind) {
        // Change to specific user URL after deciding on how to pass info.
        // Currently getting user named "user" as placeholder
        // const url = "http://localhost:3001/pets/" + pid;
        const url = "/pets/" + pid;
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(this.state.pList[ind]),
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                console.log("Changes made to server db")
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    petDelete(pid) {
        // Change to specific user URL after deciding on how to pass info.
        // Currently getting user named "user" as placeholder
        // const url = "http://localhost:3001/pets/" + pid;
        const url = "/pets/" + pid;
        const request = new Request(url, {
            method: "DELETE",
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                console.log("Changes made to server db")
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    userUpdate() {
        // const url = "http://localhost:3001/users/" + this.targetUserId;
        const url = "/users/" + this.targetUserId;
        const request = new Request(url, {
            method: "PATCH",
            body: JSON.stringify(this.targetUser),
            headers: { 
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request)
        .then((res) => {
            if (res.status === 200) {
                console.log("Changes made to server db")
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    handlePWChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleGoldChange = (e) => {
        this.setState({
            gold: e.target.value
        });
    }

    /* For pet changes events */

    handlePetNameChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][1] = e.target.value;
            }
        }
    }

    handlePetHungerChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][2] = e.target.value;
            }
        }
    }

    handlePetHappinessChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][3] = e.target.value;
            }
        }
    }

    handlePetIntelligenceChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][4] = e.target.value;
            }
        }
    }

    handlePetStrengthChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][5] = e.target.value;
            }
        }
    }

    handlePetSpeedChange = (e) => {
        let petId = e.target.attributes.getNamedItem('itemId').value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                this.petChanges[i][6] = e.target.value;
            }
        }
    }

    markForRemovalP = (e) => {
        let petId = e.target.value;
        for (let i = 0; i < this.petChanges.length; i++) {
            if (this.petChanges[i][0] === petId) {
                let pEntries = document.querySelector("#petEntries");
                let ind = e.target.getAttribute('ind')
                let target = pEntries.children[ind]

                let notif = document.createElement('div')
                let notifTxt = document.createTextNode("!! MARKED FOR REMOVAL !!")
                notif.appendChild(notifTxt)

                target.insertBefore(notif, target.childNodes[0])

                this.petChanges[i][7] = "remove";
            }
        }
    }

    markForRemovalI = (e) => {
        let itemId = e.target.value;
        for (let i = 0; i < this.itemChanges.length; i++) {
            if (this.itemChanges[i][0] === itemId) {
                let iEntries = document.querySelector("#itemEntries");
                let ind = e.target.getAttribute('ind')
                let target = iEntries.children[ind]

                let notif = document.createElement('div')
                let notifTxt = document.createTextNode("!! MARKED FOR REMOVAL !!")
                notif.appendChild(notifTxt)
                
                target.insertBefore(notif, target.childNodes[0])
                this.itemChanges[i][1] = "remove";
            }
        }
    }

    /* For item changes events */

    handleItemNameChange = (e) => {}

    handleItemHungerChange = (e) => {}

    handleItemHappinessChange = (e) => {}

    handleItemIntelligenceChange = (e) => {}

    handleItemStrengthChange = (e) => {}

    handleItemSpeedChange = (e) => {}

    handleItemGoldChange = (e) => {}

    handleEnter = (event) => {
        if (event.key === 'Enter' && this.state.targetUserName.length > 0) {
            this.handleSaveClick();
        } else if (event.key === 'Enter') {
            alert('Pet Type name cannot be blank :(');
        }
    }

    render() {

        if (this.state.currUser === null) {
            return(
                <Redirect push to={{
                    pathname: "/"
                }} />
            );
        }
        return(
            <div onKeyDown={this.handleEnter}>
                <Link to={'./AdminUserPage'}>
                    <img 
                        className={'saveIcon'} 
                        src={saveIcon} 
                        alt={'Save Icon'} 
                        onClick={this.handleSaveClick}>
                    </img>
                </Link>

                <AdminSideMenu />

                <div className='main'>
                    <div className='mainForm'>
                        <div className='itemTitle'>Username: {this.state.targetUserName}</div>
                        <div className='itemForm'>
                            <p className={'addItemLink'}>
                                Password: 
                                <input className={'addItemLink'}
                                    type='Text' 
                                    value={this.state.password} 
                                    onChange={(event)=>this.handlePWChange(event)} 
                                /> 
                            </p> 
                            <p className={'addItemLink'}>
                                Gold: 
                                <input className={'addItemLink'}
                                    type='Text' 
                                    value={this.state.gold} 
                                    onChange={(event)=>this.handleGoldChange(event)} 
                                /> 
                            </p> 
                            
                            <div className='itemSubtitle'>List of pets</div>
                            <div id='petEntries'>

                            </div>
                            <div className='itemSubtitle'>List of Items</div>
                            <div id='itemEntries'>

                            </div>
                            <br/>
                            <br/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUserPage;