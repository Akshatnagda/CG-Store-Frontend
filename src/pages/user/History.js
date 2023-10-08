import React, { useState, useEffect } from 'react'
import { getUserOrders } from '../../functions/user'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { PDFDownloadLink } from '@react-pdf/renderer';
import ShowPaymentInfo from '../../components/cards/ShowPaymentInfo'
import Invoice from '../../components/order/Invoice'
import ModalImage from "react-modal-image";
import blankImg from '../../images/blank.jpg'


const History = () => {

    const { user } = useSelector((state) => ({ ...state }));

    const [orders, setOrders] = useState([]);


    return (
        <div className=''>
            <h4 className='text-xl text-center my-5  font-semibold'>{orders.length > 0 ? 'User purchase history' : 'No purchase history'}</h4>
            
        </div>
    )
}

export default History