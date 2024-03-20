import React from "react";
import styled from "styled-components";
import { AppleIcon, GoogleIcon } from "../../../Assets/Svgs";
import { GTextField, GSpacer, GButton } from "../../../Ui_elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./validation";
import { Link, useNavigate } from "react-router-dom";
import { useApiSend } from "../../../Hooks/api";
import { loginUser } from "../../../Urls";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setUser } from "../../../Redux/Reducers";
import { devices } from "../../../Utils";
import { useDeviceCheck } from "../../../Hooks/useDeviceCheck";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useDeviceCheck();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { mutate, isPending } = useApiSend(
    loginUser,
    (data) => {
      dispatch(setUser(data));
      toast.success("Welcome")
      navigate("/");
    },
    (error) => {
      toast.error(error.message);
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <Title>Log In</Title>
      <Subtitle>
        Sign in to view your personal information and check up on your recent
        orders
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GTextField
          id="email"
          placeholder="Email / Phone number"
          inputType="text"
          name="email"
          register={register}
          error={errors.email}
          errorText={errors.email && errors.email.message}
          required
        />
        <GSpacer size={40} />
        <GTextField
          id="password"
          placeholder="Password"
          inputType="password"
          name="password"
          register={register}
          error={errors.password}
          errorText={errors.password && errors.password.message}
          required
        />
        <ForgotPassword to={"/forgot-password"}>
          Forgot password?
        </ForgotPassword>
        <BtnWrapper>
          <GButton
            width={"60%"}
            isLoading={isSubmitting || isPending}
            type={"submit"}
            label={"Log in"}
          />
          <OrTxt>or</OrTxt>
          <IconWrapper>
            <IconBox>
              <GoogleIcon /> {isMobile && <IconTxt>Google</IconTxt>}
            </IconBox>
            <IconBox>
              <AppleIcon /> {isMobile && <IconTxt>Apple</IconTxt>}
            </IconBox>
          </IconWrapper>
        </BtnWrapper>
      </Form>
      <AuthLinkTxt>
        Don’t have an account? <SignUpTxt to={"/signup"}>Sign up</SignUpTxt>
      </AuthLinkTxt>
    </>
  );
};

export default Login;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0em;
  text-align: left;
  color: var(--Primary-500, #ff4623);

  @media ${devices.mobileL} {
    font-size: 34px;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #626262;
  text-align: left;
  width: 85%;

  @media ${devices.mobileL} {
    font-size: 14px;
    margin-top: 10px;
    width: 90%;
  }
`;

const Form = styled.form`
  margin: 77px 0 24px;

  @media ${devices.mobileL} {
    margin: 50px 0 20px;
  }
`;

const AuthLinkTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #b6b6b6;

  @media ${devices.mobileL} {
    text-align: center;
  }
`;

const ForgotPassword = styled(Link)`
  display: block;
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin: 24px 0 58px;
  width: fit-content;

  @media ${devices.mobileL} {
    font-size: 14px;
    margin: 24px 0 48px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  & > svg {
    width: 65.083px;
    height: 55px;
    flex-shrink: 0;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 35px;
  }
`;

const OrTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const SignUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  width: 65.083px;
  height: 55px;
  padding: 12.833px 18.085px 12.833px 18.333px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.917px solid var(--Black-100, #b6b6b6);
  cursor: pointer;
  transition: all 0.25s ease;

  & > svg {
    width: 28.665px;
    height: 29.333px;
    flex-shrink: 0;
  }

  &:hover {
    border-color: #8a8787;
  }

  @media ${devices.mobileL} {
    width: 47%;
    gap: 12px;
  }
`;

const IconTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-top: -2px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 25px;

  @media ${devices.mobileL} {
    width: 100%;
    gap: unset;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
