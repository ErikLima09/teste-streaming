import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from "../../hooks/useAuth";
import styles from './NewProject.module.css';
import Header from '../../components/Header';
import CardFilms from "./card_films/index";

const Home = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();
    const filmes = [ 
        {
            nome: "Filme 1",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
        {
            nome: "Filme 2",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
        {
            nome: "Filme 3",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
        {
            nome: "Filme 3",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
        {
            nome: "Filme 3",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
        {
            nome: "Filme 3",
            abreviacao: "dark.jpg",
            genero: "Ação",
        },
    ];

    return (
        <div>
            <Header />
            
            <div 
                className='d-flex' 
                style={{
                    width: '600px',
                    margin: "0 auto 0 auto",
                    flexWrap: 'wrap',
                }}
            >
                { filmes.map((item, index) => (
                    <CardFilms 
                        filme={item} key={index}
                    />
                )) }
            </div>








            {/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Button> */}
        </div>
    );
};

export default Home;