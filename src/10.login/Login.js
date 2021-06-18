import { useForm } from "react-hook-form";
import { FormError } from "./components/FormError";
import { Wrap, Form, Title, Input, Button } from "./style/LoginStyle";
import { userdb } from "../userdb";
import { useHistory } from "react-router-dom";

let idMessage;
let pwMessage;

export const Login = () => {
  const history = useHistory();
  /* =>경로를 지정해줄수있음 */

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { userId, password } = getValues();

    if (userId !== userdb.userId) {
      return (idMessage = "아이디가 틀렸습니다.");
    }

    if (password !== userdb.password) {
      return (pwMessage = "비밀번호가 틀렸습니다.");
    }

    alert("로그인되었습니다!");
    history.push("/");
    /* =>원하는 라우트로 페이지를 이동시켜줌 */
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("userId", {
            required: "아이디는 필수 입니다.",
          })}
          hasError={Boolean(errors?.userId?.message)}
          type="text"
          placeholder="아이디"
        />
        {errors?.userId?.message && (
          <FormError message={errors?.userId?.message} />
        )}
        {idMessage && <FormError message={idMessage} />}

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요.",
            },
          })}
          hasError={Boolean(errors?.password?.message)}
          type="password"
          placeholder="패스워드"
        />
        {errors?.password?.message && (
          <FormError message={errors?.password?.message} />
        )}
        {pwMessage && <FormError message={pwMessage} />}

        <Button canClick={!isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
