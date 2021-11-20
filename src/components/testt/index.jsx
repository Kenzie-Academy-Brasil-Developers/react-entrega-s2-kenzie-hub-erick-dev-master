import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
const Form = () => {
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
        dataAniversario: yup
          .string()
          .min(10, "Data inválida")
          .required("Campo Obrigatório")
          .matches(
            /(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2003)/,
            "Formato DD/MM/YYYY, e ter no mínimo 18 anos"
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
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Cadastrar Usuario </h3>
            <input
              placeholder="Nome de usuario*"
              {...register("nomeUsuario")}
            />
            <span>{errors.nomeUsuario?.message}</span>
            <input placeholder="Nome completo*" {...register("nomeCompleto")} />
            <span>{errors.nomeCompleto?.message}</span>
            <input placeholder="Apelidos*" {...register("apelido")} />
            <span>{errors.apelido?.message}</span>
            <input placeholder="Email*" {...register("email")} />
            <span>{errors.email?.message}</span>
            <input
              placeholder="Confirme seu Email*"
              {...register("confirmaEmail")}
            />
            <span>{errors.confirmaEmail?.message}</span>
            <input placeholder="telefone*" {...register("telefone")} />
            <span>{errors.telefone?.message}</span>
            <input
              placeholder="data aniversario*"
              {...register("dataAniversario")}
            />
            <span>{errors.dataAniversario?.message}</span>
            <input placeholder="senha*" {...register("senha")} />
            <span>{errors.senha?.message}</span>
            <input
              placeholder="Confirmar senha*"
              {...register("confirmaSenha")}
            />
            <span>{errors.confirmaSenha?.message}</span>
            <button type="submit">Cadastrar!</button>
          </form>
    )
}

export default Form