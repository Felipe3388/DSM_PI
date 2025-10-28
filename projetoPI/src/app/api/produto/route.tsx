import { NextResponse } from "next/server";
 
export function GET(){
    return NextResponse.json(
        [{
            imagem:"tomate.jpg",
            nome: "Tomate",
            unidade: "CX",
            quantidade: 10,
        },
        {
            imagem:"pimentao.jpg",
            nome: "Pimentão",
            unidade: "CX",
            quantidade: 25,
        },
        {
            imagem:"banana.jpg",
            nome: "Banana",
            unidade: "CX",
            quantidade: 56,
        },
        {
            imagem:"maca.jpg",
            nome: "Maçã",
            unidade: "CX",
            quantidade: 5,
        },
        {
            imagem:"morango.jpg",
            nome: "Morango",
            unidade: "CX",
            quantidade: 28,
        },

    ],
        {status: 200});
}
 