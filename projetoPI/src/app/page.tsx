'use client';
 
import Image, { ImageLoader } from "next/image";
import { loginSchema } from "@/app/schemas/LoginSchema";
import { InputText } from "../components/InputText";
import { InputPassword } from "@/components/InputPassword";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import styles from '@/styles/Login.module.css'
 
 
 
export default function Login() {
  const router = useRouter();
 
  interface FormValues {
    username?: string;
    password?: string;
  }
 
  const formik = useFormik<FormValues>({
   
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
 
    onSubmit: (values) => {
     
 
       if(values.username === "adminsecreto" && values.password === "segredo"){
        router.push("/checkout");
       }
    }
  });
 
  const {
    handleSubmit,
    values,
    handleChange,
    errors
  } = formik;
 
 
  return (
     <>
     <div className={styles.background}>
      <div className={styles.loginback}>
       <div className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <InputText label="Usuário:" inputName="username"
          placeholder="Nome do usuário"
          value={values.username}
          id="username"
          onChange={handleChange}
          error={errors.username}
          ></InputText>
       
        <br/>
     <InputPassword
            label="Senha:"
            inputName="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            />
        <br/>
        <br/>
        <Button variant="warning" type="submit" >Entrar</Button>
      </Form>
            </div>
            <div className={styles.image}>
             
            </div>
      </div>
    </div>
    </>
  );
}