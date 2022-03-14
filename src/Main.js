import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import agent from './agent';
import { getItemFromSessionStore } from './Utils/utils';

const Main = props => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [userData, setUserData] = useState({});
    const token = getItemFromSessionStore("token");
    function GetCart() {
        agent.Cart.get().then((res) => {
            setItemsInCart(res.data.length);
        }).catch((err) => console.error(err))
    }
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (token) {
                setUserData(getItemFromSessionStore("user"))
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
        setUserData,
        userData
    };


    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
