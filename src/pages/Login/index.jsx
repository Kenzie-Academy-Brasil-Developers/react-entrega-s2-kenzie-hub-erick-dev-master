import { Container, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import Titulo from "../../components/TituloKenzie";

const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    login: yup
      .string()
      .min(10, "No minimo 10 caracteres")
      .required("Campo Obrigatório"),
    senha: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    history.push("/user/home");
    // setUser(data);
  };

  return (
    <Container>
      <Titulo/>
      <ContainerForm>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input type="text" placeholder="Login" {...register("login")} />
          <span className="msgError">{errors.login?.message}</span>
          <input
            type="password"
            placeholder="senha"
            {...register("senha")}
          />
          <span className="msgError">{errors.senha?.message}</span>
          <button type="submit">Logar</button>
          <div className="divMsg"> Criar uma Página para mostar suas <p> habilidades metas e progresso </p> </div>
          <button className="button-Cadastrar">Cadastrar</button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
