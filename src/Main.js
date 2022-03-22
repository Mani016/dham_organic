import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import agent from './agent';
import { getItemFromSessionStore } from './Utils/utils';
import { API_STATUS } from './constant';
import Alert from "./Utils/Alert";
const Main = props => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [user, setUser] = useState({});

    const token = getItemFromSessionStore("token");

    function GetCart() {
        agent.Cart.get().then((res) => {
            setItemsInCart(res.data.cartDetails.length);
        }).catch((err) => console.error(err))
    }
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (token) {
              agent.Client.getById()
              .then((res) => {
                if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
                    console.log(res);
                } else {
                    Alert.showToastAlert("error", res.message);
                    // setTimeout(function () {
                    //     window.location = '/logout';
                    //   }, 1000);
                }
            })
            .catch((err) => {
                Alert.showToastAlert("error", err.message);
                // setTimeout(function () {
                //     window.location = '/logout';
                //   }, 1000);
            });
            }
        }
        return (() => {
            isActive = false;
        })
    }, [token])
    const value = {
        itemsInCart,
        setItemsInCart,
        GetCart,
        user
    };


    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
