import { useState } from "react";
export default function Contato(){
    const [nome, setNome] = use('');
    const [email, setEmail] = use('');
    const [mensagem, setMensagem] = use('');

    const enviarWhatsApp = (e) =>{
        e.preventDefault(); 
        const telefone = '5541990099999';
        const texto = `Olá!\nMeu nome é ${nome}\nMeu email é ${email}\nMensagem ${mensagem}`
        const textoCodificacao = EncodedURIComponent(texto);
        const whatsappURL = `https://wa.me/${telefone}?text=${textoCodificado}`
    }
}