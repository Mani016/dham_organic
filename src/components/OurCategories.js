import React, {  useEffect, useState } from 'react';
import agent from '../agent';
import { API_STATUS } from '../constant';
import { CategoryCard } from '../pages/Categories';
import Loader from './Loader';

const OurCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function getCategories() {
    setLoading(true);
    const payload = {
      page: 1,
      limit: 4,
      status: true,
    };
    agent.Category.get(payload)
      .then((res) => {
        if (API_STATUS.SUCCESS_CODE.includes(res.status)){
          setData(res.data.data);
          setLoading(false);
        } else {
          setData([]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
      });
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className='product-section'>
      <div className='container'>
        <div className='base-header'>
          <small> Our Featured Categories</small>
          <h3> Organic Categories</h3>
        </div>
        {loading ? <Loader /> :<div className='row'> <CategoryCard item={data || []} /></div>}
      </div>
    </section>
  );
};

export default OurCategories;
