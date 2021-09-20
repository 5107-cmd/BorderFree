import React from "react";
import { config } from '../App';
import Header from "./Header";
import './Detail.css';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
        this.state = {
            itemData: {}
        }
    }

    getUrl = (itemId) => {
        const url = `${config.endpoint}/${itemId}`;
        console.log(url)
        return url;
    }

    getItemData = async (url) => {
        let apiResponse = await fetch(url);
        let data = await apiResponse.json();
        this.setState({
            itemData: data
        })
    }
    handleClick = async (id) => {
        let response = await fetch(`${config.endpoint}/${id}`, {
            method: 'POST',
        });
        console.log(response);
    }
    componentDidMount = async () => {
        var itemId = this.props.match.params.id;
        var url = this.getUrl(itemId);
        await this.getItemData(url);
        await this.handleClick(itemId)

    }


    render() {
        return (
            <>
                <Header />
                <div className="container mt-5">
                    <div className="row d-flex flex-row">
                        <div className="col-xs-12 col-md-6">
                            <img className="w-100" src={this.state.itemData.image} />
                        </div>
                        <div className="col-xs-12 col-md-6 align-items-center">
                            <h1>{this.state.itemData.brand}</h1>
                            <h3>{this.state.itemData.name}</h3>

                            <strong className="text-success">₹ {this.state.itemData.price}/-</strong>

                            <div className="my-3 d-flex flex-row">
                                {Object.keys(this.state.itemData).length && this.state.itemData.colors.map(
                                    (color) => <div className="mx-2" style={{ height: "30px", width: "30px", border: "2px solid silver", borderRadius: "100%", backgroundColor: `${color}` }}></div>
                                )}
                            </div>
                            <div className="mt-3">
                                <h3>Description</h3>
                                <p>{this.state.itemData.description}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}