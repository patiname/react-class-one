import { useForm } from "react-hook-form";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.valid ? "lightblue" : "tomato")};
  cursor: ${(props) => (props.valid ? "pointer" : "default")};
`;

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  //   console.log(watch());
  console.log(isValid);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("userId", {
            required: "아이디를 적어주세요.",
            minLength: {
              value: 3,
              message: "아이디는 3자리 이상 작성해주세요.",
            },
          })}
          type="text"
          placeholder="ID"
        />
        {/* {errors?.userId?.message ? <span>{errors.userId.message}</span> : null} */}
        {errors?.userId?.message && <span>{errors.userId.message}</span>}

        <input
          {...register("password", {
            required: "패스워드를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상 작성해주세요.",
            },
            pattern: /^[A-Za-z0-9]{6,12}$/,
          })}
          type="password"
          placeholder="PASSWORD"
        />
        {errors?.password?.message ? (
          <span>{errors.password.message}</span>
        ) : null}

        <Button valid={isValid}>로그인</Button>
      </form>
    </div>
  );
};
