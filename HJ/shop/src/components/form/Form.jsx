import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = ({ email, password }) => {
    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
  };

  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다.",
    },
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        <div>
          <span className={styles.form_error}>{errors?.email?.message}</span>
        </div>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        <div>
          <span className={styles.form_error}>{errors?.email?.message}</span>
        </div>
      </div>
      <button type="submit">{title}</button>
      <span className={styles.form_error}>{errors?.email?.message}</span>
    </form>
  );
};

export default Form;
