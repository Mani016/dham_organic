import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import agent from './agent';
import {
  getItemFromSessionStore,
  HANDLE_ERROR,
  setItemToSessionStore,
} from './Utils/utils';
import { API_STATUS } from './constant';
const Main = (props) => {
  const [itemsInCart, setItemsInCart] = useState({});
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const selectedAddress = getItemFromSessionStore('selectedAddress');
  const [finalAmount, setFinalAmount] = useState(0);
  const token = getItemFromSessionStore('token');

  function checkUserLogin() {
    if (getItemFromSessionStore('token')) {
      return true;
    }
    return false;
  }

  function GetCart() {
    if (token) {
      agent.Cart.get()
        .then((res) => {
          setItemsInCart(res.data);
        })
        .catch((err) => console.error(err));
    }
  }
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      if (token) {
        setLoading(true);
        agent.Client.getById()
          .then((res) => {
            if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
              setUser(res.data);
              setLoading(false);
            } else {
              HANDLE_ERROR(res.message, setLoading);
            }
          })
          .catch((err) => {
            HANDLE_ERROR(err.message, setLoading);
          });
      }
    }
    return () => {
      isActive = false;
    };
  }, [token, refresh]);
  useEffect(() => {
    setFinalAmount(
      itemsInCart.subTotal <= selectedAddress?.locality?.minOrder
        ? itemsInCart.subTotal + selectedAddress.locality.charge
        : itemsInCart.subTotal
    );
  }, [itemsInCart, selectedAddress]);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  const handleSelectedAddress = (address) => {
    setItemToSessionStore('selectedAddress', address);
    handleRefresh();
  };
  const value = {
    itemsInCart,
    setItemsInCart,
    GetCart,
    user,
    handleRefresh,
    loading,
    setLoading,
    checkUserLogin,
    handleSelectedAddress,
    selectedAddress,
    finalAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
