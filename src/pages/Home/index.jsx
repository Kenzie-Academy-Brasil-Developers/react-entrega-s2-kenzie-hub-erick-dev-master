import Titulo from "../../components/TituloKenzie";

// import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { ContainerForm } from "./styles.js";
const Home = ({ user }) => {
    const history = useHistory()
    
    
    const formSchema = yup.object().shape({
        nomeCompleto: yup
        .string()
        .min(18, "No minimo 18 caracteres")
        .required("Campo Obrigatório")
        .matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, "Somente letras e o nome completo"),
          email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
          bio: yup
          .string()
          .min(10, "No minimo 10 caracteres")
          .required("Campo Obrigatório"),
        telefone: yup
          .string()
          .min(11, "Numero inválido")
          .required("Campo Obrigatório")
          .matches(
            /(\?\d{2}\?\s)?(\d{4,5}\d{4})/,
            "telefone não está correto o formator correto é (00) 90000-0000"
            ),
            senha: yup
            .string()
          .min(8, "Senha fraca! adcione letras, numeros e caracteres especiais")
          .required("Campo Obrigatório")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
            ),
            confirmaSenha: yup.string().oneOf([yup.ref("senha")], "Senha não confere"),
          });
          
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm({
            resolver: yupResolver(formSchema),
          });
          
          const onSubmitFunction = (data) => {
            history.push("/user/:id");
            // setUser(data);
          };
          
          
          
    return(
      <ContainerForm>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <Titulo/>
            <input type="text"
              placeholder="Nome"
              {...register("nomeCompleto")}
              />
            <span className="msgError">{errors.nomeCompleto?.message}</span>
            <input type="text" placeholder="Email" {...register("email")} />
            <span className="msgError">{errors.email?.message}</span>
            <input type="text" placeholder="Bio" {...register("bio")} />
            <span className="msgError">{errors.bio?.message}</span>
            <input type="text" placeholder="Contato" {...register("telefone")} />
            <span className="msgError">{errors.telefone?.message}</span>
            <input type="password"
              placeholder="senha"
              {...register("confirmaEmail")}
              />
            <span className="msgError">{errors.senha?.message}</span>
            <ul className="lista-Modulos"> 
              <li>Primeiro <div></div></li>
              <li>Segundo</li>
              <li>Terceiro</li>
              <li>Quarto</li>
            </ul>
            <input type="password" placeholder="Confirmar senha" {...register("confirmaSenha")} />
            <span className="msgError">{errors.confirmaSenha?.message}</span>
            <button className="cadastrar" type="submit">Cadastrar</button>
          </form> 
          </ContainerForm>
    )
  
  
}
export default Home;