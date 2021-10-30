import React, { Component } from 'react'
import { isEmptyStatement, isTemplateSpan } from 'typescript';
import './List.css'

type itemsState = {
    items: string[]
}

type DataObj = {
    dataObj: []
}

interface Arr {
    title: string;
    desc: string;
}

interface Sort {
    sort: null | boolean;
}

export default class List extends Component {
    state = {
        title: "",
        desc: "",
        items: [],
        sort: null,
        IsSorted:false
    };

    componentDidMount() {
        let dataObj = JSON.parse(localStorage.getItem("items") || '{}');
        this.setState({
            items: dataObj
        })
    }

    changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ title: e.target.value }); }
    changeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => { this.setState({ desc: e.target.value }); }

    deleteList = (key: number) => {
        const allItems = this.state.items;
        allItems.splice(key, 1);
        localStorage.setItem("items", JSON.stringify(allItems));
        this.setState({
            items: allItems
        })
    }

    storeItems = (e: React.FormEvent) => {
        e.preventDefault();
        const { title, desc } = this.state;
        this.setState({
            items: [...this.state.items, { title, desc }],
            title: "",
            desc: ""
        })
        const { items } = this.state;
        localStorage.setItem("items", JSON.stringify(items));
    }

    asc = () => {
        this.setState({
            sort: true,
            items: this.state.items.sort((a: Arr, b: Arr) => (a.title > b.title ? 1 : -1))
        })
    }

    des = () => {
        this.setState({
            sort: false,
            items: this.state.items.sort((a: Arr, b: Arr) => (a.title > b.title ? -1 : 1))
        })
    }

    render() {
        const { items } = this.state;
        console.log(items)
        return (
            <div className="main">
                  <div className="dropdown">
                    <p className="sort">Sort <div className="sort-icon"><i className="material-icons" id="sort">sort</i> </div></p>
                    <div className="dropdown-content">
                        <div onClick={this.asc}><i className="material-icons" id="arrow_up">arrow_upward</i>alphabetcally ascending</div>
                        <div onClick={this.des}><i className="material-icons" id="arrow_up">arrow_downward</i>alphabetically descending</div>
                    </div>
                </div>
                <form >
                    <div className="box">
                        <div className="box-td">
                            <input type="text"
                                className="title"
                                value={this.state.title}
                                onChange={this.changeTitle}
                                placeholder="Title"
                                required
                            />
                            <textarea rows={4}
                                className="desc"
                                name="desc"
                                value={this.state.desc}
                                onChange={this.changeDesc}
                                placeholder="Write a note"
                                required
                            ></textarea>
                        </div>

                        <div className="btns">
                            <button type="submit" className="btn-add" disabled={this.state.title.length < 1} onClick={this.storeItems} >
                                Add task
                            </button>
                            <button className="btn-cancel">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
                <div>{
                    <ul className="list">
                        {items && items.map((data: any, key: number) => (
                            <div className="hr"> <input type="checkbox" className="checkbox" onClick={() => this.deleteList(key)} /><li className="dataList" key="data.title" >
                                {data.title}<br /> {data.desc}
                            </li> </div>
                        ))}

                        {this.state.sort && items.map((data: any, key: number) => (
                            <div className="hr"> <input type="checkbox" className="checkbox" onClick={() => this.deleteList(key)} /><li className="dataList" key="data.title" >
                                {data.title}<br /> {data.desc}
                            </li> </div>
                        ))}
                    </ul>
    }
                </div>
            </div>
        )
    }
}
