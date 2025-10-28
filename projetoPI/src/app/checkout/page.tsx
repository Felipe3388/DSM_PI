'use client';

import { InputText } from '@/components/InputText';
import styles from '@/styles/checkout.module.css';
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Table, Button } from "react-bootstrap";

export default function checkout(){

    const [produtos, setProdutos] = useState<any[]>([]);
 
    useEffect (() => {
        console.log(">> passo 1")
        fetch("http://localhost:3000/api/produto", {method:"GET"}).then(async (response)=> {
            console.log(">> passo 2")
 
            const resposta = await response.json();
            setProdutos(resposta);
 
            console.log(resposta)
        })
    },[]);
 

    return(
        <>
            <h1>Checkout</h1>
            <br />
            <section className={styles.checkout}>
                <div className={styles.tela}>
                    <div className={styles.navbarra}>
                        <div className={styles.barra}>
                            Produtos escolhidos
                        </div>
                        <div className={styles.barra}>
                            Dados de entrega
                        </div>
                    </div>
                    <div className={styles.tab}>
                        <div >
                            <Table >
                                <tbody>
                                    {
                                        produtos.map((produto, index) => {
                                            return <tr key={index}>
                                                <td><img src={produto.imagem} alt="" className={styles.imagens}/></td>
                                                <td>{produto.nome}</td>
                                                <td>{produto.unidade}</td>
                                                <td>{produto.quantidade}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div>

                            <div className={styles.background}>
                                
                                <div>
                                <InputText
                                    label="CEP"
                                    inputName="cep"
                                    placeholder="CEP"
                                    id="cep"
                                />
                                <br />
                                <InputText
                                    label="Numero"
                                    inputName="num"
                                    placeholder="Numero"
                                    id="num"
                                />

                                <br />
                                <br />

                                <Button variant="primary">
                                    Finalizar pedido
                                </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}