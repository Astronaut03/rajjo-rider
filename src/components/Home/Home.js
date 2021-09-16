import React from 'react';
import './Home.css';
//import { Link } from 'react-router-dom';
import bg from '../../images/Bg.png';
//import logo from '../../images/riders logo.svg'
import Card from '../Card/Card';
import { Grid, Container } from '@material-ui/core';
//import { Button, Navbar, Nav, Form, FormControl, NavbarBrand } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const style = {
        display: 'flex',
        margin: '30px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'Bicycle Ride',
            description: 'Standard designed-concept living area and have many facilities.',
            imgUrl: 'https://www.commencal-store.es/Files/99971/Img/20/17SUPDHV3YE_680.jpg',
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'Cy',
            price: 129
        },
        {
            title: 'Motorbike Ride',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://mcdn.wallpapersafari.com/medium/68/98/36NtXv.jpg',
            bed: 2,
            capacity: 2,
            bedType: 'Double',
            avatar: 'Bk',
            price: 149
        },
        {
            title: 'Car Ride',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://pic.52112.com/180806/JPG-180806_120/4UU57yK5Ae_small.jpg',
            bed: 4,
            capacity: 4,
            bedType: 'Family',
            avatar: 'Ca',
            price: 599
        },
        {
            title: 'Bus Ride',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://gomotors.net/photos/3a/58/white-bus_141d5.jpg?i',
            bed: 42,
            capacity: 4,
            bedType: 'Family',
            avatar: 'Bs',
            price: 189
        }
        
    ]

    return (
        <div style={{ backgroundImage: ` url(${bg})` }} className="bg">

            <Navbar></Navbar>
            
            <div className="card-group" style={style}>
            <Container>
            <Grid container spacing={3} justify="center" alignItems="center">
            {
                rooms.map(room => <Grid item xs={12} md={3} lg={3}>
                    <Card key={room.bedType} room={room}></Card>
                </Grid>)
            }
            </Grid>        
        </Container>
        </div>
        </div>
    );
};

export default Home;